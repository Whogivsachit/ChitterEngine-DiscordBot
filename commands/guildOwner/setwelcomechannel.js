const Discord = require('discord.js');
exports.run = async (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
const modLog = message.member.guild.channels.find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"));
if (!message.member.hasPermission("MANAGE_GUILD")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_GUILD\`` } });
if (!modLog) return message.channel.send('You need To Define the mod-logs channel first.' + ` \`\`${guildConf.prefix}setlogs <channel>\`\` ` );


message.channel.send({embed: { color: 15158332, description: `WARNING! Do not tag the channel just put the plain channel name EXAMPLE: ~setwelcomechannel welcome ` } });


  let welcomechannel = args[0];
  if (!welcomechannel) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
  if (welcomechannel > 5) return message.channel.send({embed: { color: 15158332, description: `Prefix cannot exceed 5 characters` } });

client.settings.set(message.guild.id, welcomechannel, `welcomeChannel`);  
message.channel.send({embed: { color: 0x00A2E8, description: `Welcome Channel Set to: ${welcomechannel}`} });


let user = message.author
 const embed = new Discord.RichEmbed()
    .setColor(0x0000FF)
    .setTimestamp()
    .addField('Action:', 'Welcome Channel Changed')
    .addField('Welcome Channel Changed to:', `${welcomechannel}`)
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
  name: 'setwelcomechannel',
  description: 'Sets the bots welcome channel.',
  usage: 'setwelcomechannel <channel> ( DONT TAG THE CHANNEL! )'
};






