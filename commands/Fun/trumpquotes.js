const snek = require('snekfetch');
const Discord = require('discord.js');
const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

exports.run = (client, message, args) => {
    snek.get(api).then(r => {
        let embed = new Discord.RichEmbed()
        .setTitle('Trump quotes generator')
        .setDescription(r.body.message)
        .setColor('RANDOM')
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
  name: 'trumpquotes',
  description: 'Displays a random trump quote.',
  usage: 'trumpquotes'
};
