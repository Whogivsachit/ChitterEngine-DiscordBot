const snek = require('snekfetch');
const Discord = require('discord.js');
const api = "https://nekos.life/api/v2/img/waifu";
exports.run = (client, message, args) => {
    snek.get(api).then(r => {
        const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} My waifu :D`)
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
  name: 'waifu',
  description: 'feeds the user.',
  usage: 'waifu'
};