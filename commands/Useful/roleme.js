const Discord = require('discord.js');
exports.run = (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);

let guildId = 595738125595050024;
if(message.guild.id != guildId) return;

	let name = args[0];
    let role = message.guild.roles.find(x => x.name === name);
    if (!role) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`\n Make sure you spelt the role right! case sensitive.` } });
        message.member.addRole(role).catch(e => {
        return message.channel.send(`:no_entry_sign: **Error:**\n${e}`);
    });
    message.channel.send({
      embed: {
        color: 4777662, 
        description: `I've added the **${name}** role to **${message.author}**.`
      }})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'roleme',
  description: 'Add the role to you.',
  usage: 'roleme <role>'
};
