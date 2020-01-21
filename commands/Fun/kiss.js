const snek = require('snekfetch');
const Discord = require('discord.js');
const api = "https://nekos.life/api/kiss";
exports.run = (client, message, args) => {
    snek.get(api).then(r => {
      if(!message.mentions.members.first()) {
        const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} kiss kiss`)
            .setImage(r.body.url)
            return message.channel.send(embed);
                  }
        const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a Kiss! How sweet!`)
            .setImage(r.body.url)
            message.channel.send(embed);
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  category: 'Fun',
  name: 'kiss',
  description: 'Kiss a user. How romantic.',
  usage: 'kiss <@user>'
};