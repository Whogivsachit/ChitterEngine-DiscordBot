const config = require('../../config.json');
exports.run = (client, message, args) => {
  if(message.author.id !== config.ownerid) return message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command` } });
    let newname = args.join(' ')
    client.user.setUsername(newname)
  
    message.channel.send(`Okay, I set my username to ${newname}!`).then(m => {
      message.delete(100)
      m.delete(10000)
    })
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Owner',
  name: 'setnick',
  description: 'Set the bots nickname.',
  usage: 'setnick <input>'
};
