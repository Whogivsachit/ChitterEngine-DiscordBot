const snek = require('snekfetch');
const Discord = require('discord.js');
const api = "https://nekos.life/api/pat";
exports.run = (client, message, args) => {
    snek.get(api).then(r => {
      if(!message.mentions.members.first()) {
        const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} Pat Pat`)
            .setImage(r.body.url)
            return message.channel.send(embed);
                  }
        const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} patted ${message.mentions.members.first().user.username}`)
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
  name: 'pat',
  description: 'Pats the user.',
  usage: 'pat <@user>'
};