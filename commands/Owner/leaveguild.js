const config = require('../../config.json');
exports.run = async (client, message, args) => {
if(message.author.id !== config.ownerid) return message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command` } });

args = args.slice(0).join(' ');
if (args.length < 1) return message.reply("Please type a guild to leave :facepalm:");

message.guild.leave(args);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Owner',
  name: 'leaveguild',
  description: 'Leaves the specified guild',
  usage: 'leaveguild'
};
