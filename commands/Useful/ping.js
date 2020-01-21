exports.run = (client, message) => {
 message.channel.send('Ping?').then(m => m.edit(message.channel.send({
      embed: {
        color: 4777662,
        description: ` heartbeat: ${Math.round(client.ping)}ms.`
      }})))

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'ping',
  description: 'Displays heartbeat.',
  usage: 'ping'
};
