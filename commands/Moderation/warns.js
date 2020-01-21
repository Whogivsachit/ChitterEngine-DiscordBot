const Discord = require('discord.js');
const settings = require('../../config.json');
exports.run = (client, message, args, defaultSettings) => {

let user = message.author;
let tagged = message.guild.member(message.mentions.users.first());

if (!args[0]) {
	const key_s = `${message.guild.id}-${message.author.id}`;
	return message.channel.send({embed: { color: 15158332, description: `You've been warned ${client.warns.get(key_s, "warns")} times.` } });
} else {
	if (tagged < 1) return message.channel.send({embed: { color: 15158332, description: `Please tag a user to check <@user>` } });
	const key_o = `${message.guild.id}-${tagged.id}`;
	return message.channel.send({embed: { color: 15158332, description: `This user has been warned ${client.warns.get(key_o, "warns")} times.` } });
}


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  category: 'Moderation',
  name: 'warns',
  description: 'Displays the warns of a user.',
  usage: 'warns <@user>'
};
