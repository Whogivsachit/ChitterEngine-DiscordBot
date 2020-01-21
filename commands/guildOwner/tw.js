const Discord = require('discord.js');
const glob = require("glob");
exports.run = async (client, message, args, defaultSettings, params) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);

const admins = [ '202967961298927616', '202967961298927616' ]

if(admins.includes(message.author.id)) {
 client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
 client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));

}else return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_ROLES\`` } });


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'tw',
  description: 'tw',
  usage: 'tw'
};
