const {RichEmbed} = require('discord.js');
const settings = require('../../config.json');
const Discord = require('discord.js');
exports.run = async (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
const modLog = message.member.guild.channels.find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"));
if (!message.member.hasPermission("MANAGE_MESSAGES")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_MESSAGES\`` } });
if (!modLog) return message.channel.send('You need To Define the mod-logs channel first.' + ` \`\`${guildConf.prefix}setlogs <channel>\`\` ` );

// <section>
// Actual Code Section
// </section>
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!user || !reason) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
    let RolePosition = message.guild.member(message.mentions.users.first()).highestRole.position;
    let botRolePosition = message.guild.member(client.user).highestRole.position;
    if (botRolePosition <= RolePosition) return message.channel.send({embed: { color: 15158332, description: `:no_entry_sign: **Error:** Sorry! The user you requested is currently above my role.\n Please lower it first. or raise my role.` } });
    let muterole = message.guild.roles.find(x => x.name === "ChitterEngine:Muted");
    if(args[0] == "help"){
      message.reply("Usage: k!unmute <user> <reason>");
      return;
    }
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "ChitterEngine:Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    USE_EXTERNAL_EMOJIS: false,
                    SPEAK: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  

    let mutetime = args[1];

    await (user.removeRole(muterole.id));
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('Action:', 'Un-Mute')
    .addField('User:', `<@${user.id}>`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
    message.channel.send({
      embed: {
        color: 15158332,
        description: `:white_check_mark: Success! I\'ve UnMuted that user.`
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
stream.write(`${dformat}  ` + `[ChitterEngine]: ${message.author.username}#${message.author.discriminator} Unmuted the user ${user.id}` + "\n");
stream.end();
  };




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  category: 'Moderation',
  name: 'unmute',
  description: 'unMutes a user',
  usage: 'unmute <@user> <reason>'
};




