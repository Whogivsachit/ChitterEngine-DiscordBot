const config = require('../../config.json');
exports.run = (client, message, args) => {
	if(message.author.id !== config.ownerid) return message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command` } });
	 const args1 = args.join(" ");
    if (args1.length < 1) return message.reply("Please Specify a message to send.");
        message.channel.send(args1)
        message.delete();

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Owner',
  name: 'say',
  description: 'Says a message.',
  usage: 'say <message>'
};
