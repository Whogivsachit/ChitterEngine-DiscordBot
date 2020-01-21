 exports.run = async (client, message, args) => {
 let user = message.mentions.users.first();
  if (!user) {
    return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
  }

  let punches = [
    'https://media.giphy.com/media/rcRwO8GMSfNV6/giphy.gif',
    'https://media.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
    'https://media.giphy.com/media/pX29yxBwpqoh2/giphy.gif',
    'https://media.giphy.com/media/8cErt0PCSgzOY375br/giphy.gif',
    'https://media.giphy.com/media/GN857YcdvXZYc/giphy.gif',
    'https://media1.giphy.com/media/XFBmPZvgsOwJG/giphy.gif?cid=3640f6095c2ebbd1485647506b4829b1',
    'https://media.giphy.com/media/bXf2xlZBAIriU/giphy.gif'
  ];

  message.channel.send({
    embed: {
      color: 3447003,
      description: `${message.author.username} punched ${user.username}! :punch:`,
      image: {
        url: punches[Math.floor(Math.random() * punches.length)]
      }
    }
  }).catch(e => logger.error(e));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'punch',
  description: 'Punch the user.',
  usage: 'punch <@user>'
};




