const Discord = require('discord.js');
exports.run = async (client, message, args) => {

var images = [
'https://media.giphy.com/media/mpfMDb6MB6EWQ/giphy.gif',
'https://media.giphy.com/media/E9oadOOmD27jG/giphy.gif',
'https://media.giphy.com/media/zqA62x7MnjmaA/giphy.gif',
'https://media.giphy.com/media/l46CahdcL5yYTaQiQ/giphy.gif',
'https://media.giphy.com/media/26ufj77mgPHLDHgWY/giphy.gif',
'https://media.giphy.com/media/1TSUKOv4k56aIryKAP/giphy.gif',
'https://media.giphy.com/media/TIyJGNK325XGciFEnI/giphy.gif',
'https://media.giphy.com/media/BcFuckdngP0ly/giphy.gif',
'https://media.giphy.com/media/O1GhSbro4z4Dm/giphy.gif',
'https://media.giphy.com/media/iBcLqvp8FMwy3AiPGY/giphy.gif',
'https://media.giphy.com/media/ASzK5wWjMtc6A/giphy.gif'
];
var rand = Math.floor(Math.random() * images.length);
var randomImage = images[rand];

const patEmb = new Discord.RichEmbed()
.setColor(0xA901DB)
.setImage(randomImage);

message.channel.send(`<@${message.author.id}> TRUMP! YOU!`, {embed: patEmb});



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'trump',
  description: 'Displays a random trump image.',
  usage: 'trump'
};







