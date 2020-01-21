const Discord = require('discord.js');
const request = require("snekfetch");
const HTMLParser = require("fast-html-parser");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

const { text } = await request.get("http://www.fmylife.com/random");
    const root = HTMLParser.parse(text);
    const article = root.querySelector(".block a");
    const downdoot = root.querySelector(".vote-down");
    const updoot = root.querySelector(".vote-up");
    const embed = new Discord.RichEmbed()
      .setTitle("Fuck my Life, Random Edition!")
      .setColor(165868)
      .setThumbnail("http://i.imgur.com/5cMj0fw.png")
      .setFooter(`Requested by: ${message.member.displayName}`)
      .setDescription(`_${article.childNodes[0].text}\n\n_`)
      .addField("I agree, your life sucks", updoot.childNodes[0].text, true)
      .addField("You deserved it:", downdoot.childNodes[0].text, true);
      message.channel.send(embed);
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'fml',
  description: 'Shows a random FML post',
  usage: 'fml'
};












