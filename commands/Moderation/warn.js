const Discord = require('discord.js');
const settings = require('../../config.json');
exports.run = (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
const modLog = message.member.guild.channels.find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"));
if (!message.member.hasPermission("MANAGE_MESSAGES")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_MESSAGES\`` } });
if (!modLog) return message.channel.send('You need To Define the mod-logs channel first.' + ` \`\`${guildConf.prefix}setlogs <channel>\`\` ` );

// <section>
// Actual Code Section
// </section>
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1 || user < 1) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
 client.warns.ensure(`${message.guild.id}-${user.id}`, {
      user: user.id,
      warns: 0
    });
    client.warns.math(`${message.guild.id}-${user.id}`, "+", 1, "warns")  
  const embed = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason)
  .setFooter(`Warns: ${client.warns.get(`${message.guild.id}-${user.id}`, "warns")}`);
  message.channel.send({
      embed: {
        color: 4777662,
        description: `:white_check_mark: The user ${user} has been warned`
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
stream.write(`${dformat}  ` + `[ChitterEngine]: ${message.author.username}#${message.author.discriminator} Warned the user ${user}` + "\n");
stream.end();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  category: 'Moderation',
  name: 'warn',
  description: 'Warns a user.',
  usage: 'warn <@user> <reason>'
};
