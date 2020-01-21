const Discord = require('discord.js');
const { get } = require("snekfetch");

exports.run = async (client, message, args) => {
 const { text } = await get("https://getpuns.herokuapp.com/api/random");
    const embed = new Discord.RichEmbed()
      .setDescription(`_${JSON.parse(text).Pun}_`)
      .setColor(6192321);
      message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'pun',
  description: 'Sends a random pun!',
  usage: 'pun'
};