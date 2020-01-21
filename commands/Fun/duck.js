const Discord = require('discord.js');
const snek = require('snekfetch');
const api = "https://random-d.uk/api/v1/random?type=gif";
exports.run = async (client, message, args) => {
snek.get(api).then(r => {
 const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setImage(r.body.url)
        .setFooter("Ah Cute duckies!")
        message.channel.send(embed)
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'duck',
  description: 'Shows a cute duck pic',
  usage: 'duck'
};






