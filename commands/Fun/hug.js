const snek = require('snekfetch');
const Discord = require('discord.js');
const api = "https://nekos.life/api/hug";

exports.run = (client, message, args) => {
    snek.get(api).then(r => {
     if(!message.mentions.members.first()) {
        const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} :'( forever alone`)
            .setImage(r.body.url)
            return message.channel.send(embed);
                  }
          const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} Hugged ${message.mentions.members.first().user.username}`)
            .setImage(r.body.url)
            message.channel.send(embed)
    })
} 


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'hug',
  description: 'Hugs the user.',
  usage: 'hug <@user>'
};
