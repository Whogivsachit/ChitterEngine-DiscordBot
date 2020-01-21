const config = require('../../config.json');
exports.run = async (client, message, args) => {
  if(message.author.id !== config.ownerid) return message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command` } });
       resetBot(message.channel);
            function resetBot(channel) {
            	   message.channel.send('Killing application...');
                message.react('✅')
                    .then(message => client.destroy())
                    .then(() => client.login(config.token));

}
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Owner',
  name: 'restart',
  description: 'Restarts the bot.',
  usage: 'restart'
};
