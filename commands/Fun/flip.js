const Discord = require('discord.js');
exports.run = async (client, message, args) => {

let answers = [
        'heads',
        'tails',
        'heads',
        'tails',
        'heads',
        'tails',
        'heads',
        'tails',
        'heads',
        'tails'
    ];
    let embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .addField('CoinFlip', `${answers[~~(Math.random() * answers.length)]}`);
    message.channel.send({embed}).catch(e => logger.error(e))

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'flip',
  description: 'Flip a coin.',
  usage: 'flip'
};