const Discord = require("discord.js");
exports.run = (client, message, args) => {
  require('request')('http://api.adviceslip.com/advice', function(error, response, body) {
    if (!error && response.statusCode == 200) {
       const embed = new Discord.RichEmbed()
       .setColor(0x00A2E8)
        .addField('Advice:', `${JSON.parse(body).slip.advice}`);
        message.channel.send({embed}).catch(e => logger.error(e))
    } else {
      message.channel.send(`**Advice:**\n I couldn't think of any advice...`)
    }
})
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'advice',
  description: 'Ask for advice.',
  usage: 'advice'
};
