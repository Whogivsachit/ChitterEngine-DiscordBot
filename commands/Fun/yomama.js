const Discord = require('discord.js');
const fetch = require('snekfetch');
const emoji = ['🤣', '👅', '😱', '😆', '😂'];
exports.run = async (client, message, args) => {
fetch.get('https://api.apithis.net/yomama.php').then(joe => {
        const joke = new Discord.RichEmbed()
    .setColor(3447003)
    .addField(`${emoji[~~(Math.random() * emoji.length)]}`, joe.body);
        message.channel.send({embed: joke}).catch(e => logger.error(e));
    })
  .catch(e => logger.error(e));
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  category: 'Fun',
  name: 'yomama',
  description: 'Displays the worst yomama joke.',
  usage: 'yomama'
};











