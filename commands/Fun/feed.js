const snek = require('snekfetch');
const Discord = require('discord.js');
const api = "https://nekos.life/api/v2/img/feed";
exports.run = (client, message, args) => {
    snek.get(api).then(r => {
                        if(!message.mentions.members.first()) {
        const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} Yum`)
            .setImage(r.body.url)
            return message.channel.send(embed);
                  }
        const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} fed ${message.mentions.members.first().user.username}`)
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
  name: 'feed',
  description: 'feeds the user.',
  usage: 'feed <@user>'
};