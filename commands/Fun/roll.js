exports.run = async (client, message, args) => {
let description = Math.floor(Math.random() * 6)

    message.channel.send({
      embed: {
        color: 3447003,
        description: `I rolled a... ` + description
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
  name: 'roll',
  description: 'Rolls a random number.',
  usage: 'roll'
};






