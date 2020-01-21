const Discord = require('discord.js');
exports.run = async (client, message, args) => {

 const embed = new Discord.RichEmbed()
 .setColor(0x00A2E8)
    .addField('Advice:', `:knife: I have successfully killed ${message.author}. :knife:`);
        message.channel.send({embed}).catch(e => logger.error(e))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'killme',
  description: 'The bot will kill you.',
  usage: 'killme'
};