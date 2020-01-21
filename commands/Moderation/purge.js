const Discord = require('discord.js');
const settings = require('../../config.json');
exports.run = async (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
const modLog = message.member.guild.channels.find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"));
if (!message.member.hasPermission("MANAGE_MESSAGES")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_MESSAGES\`` } });
if (!modLog) return message.channel.send('You need To Define the mod-logs channel first.' + ` \`\`${guildConf.prefix}setlogs <channel>\`\` ` );

// <section>
// Actual Code Section
// </section>
  let messagecount = parseInt(args.join(' '));
  if(!messagecount) return message.channel.bulkDelete(100);
     if(messagecount < 1 || messagecount > 100) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`\n Please type a number between 1 and 100` } });
  const fetched = await message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
  message.channel.send({
      embed: {
        color: 15158332,
        description: `Messages Purged...`
      }})

   const embed = new Discord.RichEmbed()
    .setColor(0x0000FF)
    .setTimestamp()
    .addField('Action:', 'Purge')
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
stream.write(`${dformat}  ` + `[ChitterEngine]: ${message.author.username}#${message.author.discriminator} Purged the chat` + "\n");
stream.end();

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  category: 'Moderation',
  name: 'purge',
  description: 'Purges X amount of messages from a given channel.',
  usage: 'purge <number>'
};
