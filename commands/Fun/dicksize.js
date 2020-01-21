const Discord = require("discord.js");

exports.run = (client, message, command, args) => {

    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .addField(`Dick Size:`, `**${Math.floor(Math.random() * 100)}cm!**`)
    .addField(`\u200b`, `**HOLY SHIT! thats tiny!**`)
    .setColor('RANDOM')
    return message.channel.send(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'dicksize',
  description: 'Rates your tiny dick.',
  usage: 'dicksize or dicksize <@user>'
};