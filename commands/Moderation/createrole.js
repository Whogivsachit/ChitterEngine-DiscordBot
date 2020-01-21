const Discord = require('discord.js');
const config = require('../../config.json');
exports.run = (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
const modLog = message.member.guild.channels.find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"));
if (!message.member.hasPermission("MANAGE_ROLES")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_ROLES\`` } });
if (!modLog) return message.channel.send('You need To Define the mod-logs channel first.' + ` \`\`${guildConf.prefix}setlogs <channel>\`\` ` );

 let name = args.slice(0).join(' ');
     if (!name) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
  message.guild.createRole({
    name: `${name}`
  })

  message.channel.send({
      embed: {
        color: 4777662, 
        description: `Role ${name} Created Successfully.\n Be sure to setup its permissions!`
      }})

 const embed = new Discord.RichEmbed()
    .setColor(0x0000FF)
    .setTimestamp()
    .addField('Role created:', `${name}`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
  
  message.member.guild.channels
    .find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"))
    .send(embed)
    .catch(console.error);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Moderation',
  name: 'createrole',
  description: 'Creates a new role.',
  usage: 'createrole <rolename>'
};