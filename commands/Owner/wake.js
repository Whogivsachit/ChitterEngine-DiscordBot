const config = require('../../config.json');
exports.run = (client, message, args) => {
if(message.author.id !== config.ownerid) return message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command` } });
message.channel.send({
      embed: {
        color: 2317918,
        description: `Running....`
      }
    })

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Owner',
  name: 'wake',
  description: 'Wake up the bot. Basically pinging.',
  usage: 'wake'
};
