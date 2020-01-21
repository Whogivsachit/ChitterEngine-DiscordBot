const k = require('knock-knock-jokes')
exports.run = (client, message, args, discord) => {

message.channel.send({"embed": {

  "title": "KnockKnock Jokes",
  "description": `${k()}`,
  "color": 2317918,
}})
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'knockknock',
  description: 'Displays a shitty knockknock joke.',
  usage: 'knockknock'
};
