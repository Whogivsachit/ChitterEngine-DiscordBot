const Discord = require("discord.js");

exports.run = (client, message, command, args) => {
    let user = message.mentions.users.first() || message.author;
    let gayembed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .addField(`Gay Rate`, `You Are **${Math.floor(Math.random() * 101)}% Gay**!`)
    .setColor('RANDOM')
    .setThumbnail("http://www.pngall.com/wp-content/uploads/2017/03/Rainbow-Flag-PNG-Clipart.png")
    return message.channel.send(gayembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'gayrate',
  description: 'Rates how gay you are',
  usage: 'gayrate or gayrate <@user>'
};