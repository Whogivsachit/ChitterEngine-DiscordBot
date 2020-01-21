const snek = require('snekfetch');
const Discord = require('discord.js');
const api = "https://nekos.life/api/v2/fact";
exports.run = (client, message, args) => {
    snek.get(api).then(r => {
        const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`Random Fun Fact!`)
            .setDescription(r.body.fact)
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
  name: 'fact',
  description: 'sends a random fact.',
  usage: 'fact'
};



