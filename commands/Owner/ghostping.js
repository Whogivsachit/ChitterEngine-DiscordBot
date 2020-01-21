const config = require('../../config.json');
exports.run = (client, message, args) => {
if(message.author.id !== config.ownerid) return message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command` } });
message.delete(0);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Owner',
  name: 'ghostping',
  description: 'Ghost pings the mentioned user.',
  usage: 'ghostping <@user>'
};
