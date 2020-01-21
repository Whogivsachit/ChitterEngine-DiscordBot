const config = require('../../config.json');

exports.run = (client, message, args) => {
	if(message.author.id !== config.ownerid) return message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command` } });
var game = args.join(" ").trim();
  if(!game || game.length < 1) game = null;
  client.user.setPresence({ game: { name: game, type: 0 } });
message.channel.send(`Game Set to | ${game} | successfully`)


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Owner',
  name: 'setgame',
  description: 'Set the bots current status.',
  usage: 'setgame <input>'
};
