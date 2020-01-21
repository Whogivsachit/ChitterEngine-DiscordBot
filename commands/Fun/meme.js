const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const fs = require("fs")
exports.run = async (client, message, args) => {

 try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setImage(allowed[randomnumber].data.url)
        .setFooter("Memes are hot!")
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'meme',
  description: 'Displays a random meme',
  usage: 'meme'
};



