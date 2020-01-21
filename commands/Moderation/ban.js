const Discord = require('discord.js');
const settings = require('../../config.json');
exports.run = (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
const modLog = message.member.guild.channels.find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"));
if (!message.member.hasPermission("BAN_MEMBERS")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`BAN_MEMBERS\`` } });
if (!modLog) return message.channel.send('You need To Define the mod-logs channel first.' + ` \`\`${guildConf.prefix}setlogs <channel>\`\` ` );

// <section>
// Actual Code Section
// </section>
let member = message.guild.member(message.mentions.users.first());
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (!member || !reason || !user) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
  let RolePosition = message.guild.member(message.mentions.users.first()).highestRole.position;
  let botRolePosition = message.guild.member(client.user).highestRole.position;
  if (botRolePosition <= RolePosition || !message.guild.member(user).bannable) return message.channel.send({embed: { color: 15158332, description: `The User you requested is currently to powerful!` } });
  if (!message.guild.member(user).bannable) return message.channel.send({embed: { color: 15158332, description: `The User you requested is currently to powerful!` }});
  message.guild.member(user).ban();
  const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('Action:', 'Ban')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
    message.channel.send({
      embed: {
        color: 15158332,
        description: `:hammer: Bippity boppity **BAN**! I\'ve logged the ban in the logs channel.`
      }})
     message.member.guild.channels
    .find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"))
    .send(embed)
    .catch(console.error);

// <section>
// Logger Section
// </section>
const fs = require('fs');
var d = new Date,
dformat = [d.getMonth()+1,d.getDate(),d.getFullYear()].join('/')+' '+[d.getHours(),d.getMinutes(),d.getSeconds()].join(':');
var stream = fs.createWriteStream("log.txt", {flags:'a'});
stream.write(`${dformat}  ` + `[ChitterEngine]: ${message.author.username}#${message.author.discriminator} Banned The User ${user.username}#${user.discriminator}` + "\n");
stream.end();

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  category: 'Moderation',
  name: 'ban',
  description: 'Bans the user.',
  usage: 'ban <@user> <reason>'
};
