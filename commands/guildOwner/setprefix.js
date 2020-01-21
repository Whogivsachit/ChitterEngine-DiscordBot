const Discord = require('discord.js');
exports.run = async (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
const modLog = message.member.guild.channels.find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"));
if (!message.member.hasPermission("MANAGE_GUILD")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_GUILD\`` } });
if (!modLog) return message.channel.send('You need To Define the mod-logs channel first.' + ` \`\`${guildConf.prefix}setlogs <channel>\`\` ` );

  let nprefix = args[0];
  if (!nprefix) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
  if (nprefix > 5) return message.channel.send({embed: { color: 15158332, description: `Prefix cannot exceed 5 characters` } });

client.settings.set(message.guild.id, nprefix, `prefix`);  
message.channel.send({embed: { color: 0x00A2E8, description: `Prefix Set to: ${nprefix}`} });


let user = message.author
 const embed = new Discord.RichEmbed()
    .setColor(0x0000FF)
    .setTimestamp()
    .addField('Action:', 'Prefix Changed')
    .addField('Prefix Changed to:', `${nprefix}`)
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
  name: 'setprefix',
  description: 'Sets the bots prefix',
  usage: 'setprefix <prefix>'
};






