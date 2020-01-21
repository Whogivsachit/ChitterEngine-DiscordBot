const Discord = require('discord.js');
exports.run = async (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
const modLog = message.member.guild.channels.find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"));
if (!message.member.hasPermission("MANAGE_GUILD")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_GUILD\`` } });


message.channel.send({embed: { color: 15158332, description: `WARNING! Do not tag the channel just put the plain channel name EXAMPLE: ~setlogs mod-log ` } });


  let logchannel = args[0];
  if (!logchannel) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
  if (logchannel > 5) return message.channel.send({embed: { color: 15158332, description: `Prefix cannot exceed 5 characters` } });

client.settings.set(message.guild.id, logchannel, `modLogChannel`);  
message.channel.send({embed: { color: 0x00A2E8, description: `Log Channel Set to: ${logchannel}`} });


let user = message.author
 const embed = new Discord.RichEmbed()
    .setColor(0x0000FF)
    .setTimestamp()
    .addField('Action:', 'Log Channel Changed')
    .addField('Log Channel Changed to:', `${logchannel}`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
  
  message.member.guild.channels
    .find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"))
    .send(embed)
    .catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'guildOwner',
  name: 'setlogs',
  description: 'Sets the bots log channel',
  usage: 'setlogs <logchannel> ( DONT TAG THE CHANNEL! )'
};






