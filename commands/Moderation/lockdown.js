const Discord = require('discord.js');
const ms = require('ms');
exports.run = (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
const modLog = message.member.guild.channels.find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"));
if (!message.member.hasPermission("MANAGE_MESSAGES")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_MESSAGES\`` } });
if (!modLog) return message.channel.send('You need To Define the mod-logs channel first.' + ` \`\`${guildConf.prefix}setlogs <channel>\`\` ` );

// <section>
// Actual Code Section
// </section>
 if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown lifted.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send({
      embed: {
        color: 15158332,
        description: `Channel locked down for ${ms(ms(time), { long:true })}`
      }}).then(() => {
        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send({
      embed: {
        color: 4777662,
        description: `Lockdown Lifted`
      }}).catch(console.error));
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }


 const embed = new Discord.RichEmbed()
    .setColor(15158332)
    .setTimestamp()
    .addField('Action:', 'lockdown')
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)

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
stream.write(`${dformat}  ` + `[ChitterEngine]: ${message.author.username}#${message.author.discriminator} Locked The Server` + "\n");
stream.end();

  

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld']
};

exports.help = {
  category: 'Moderation',
  name: 'lockdown',
  description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
  usage: 'lockdown <duration>'
};
