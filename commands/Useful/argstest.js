const Discord = require("discord.js");
exports.run = async(client, message, args) => {

args1 = args[0];
args2 = args[1];
args3 = args[2];
args4 = args[3];
if (args1.length < 1) return  message.channel.send({embed: { color: 15158332, description: `Missing arg 1`} });
if (args2.length< 1)  return   message.channel.send({embed: { color: 15158332, description: `Missing arg 2` } });
if (args3.length < 1) return  message.channel.send({embed: { color: 15158332, description: `Missing arg 3` } });
if (args4.length < 1) return  message.channel.send({embed: { color: 15158332, description: `Missing arg 4` } });

const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('args1', args1)
    .addField('args2', args2)
    .addField('args3', args3)
    .addField('args4', args4);

message.channel.send(embed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'argstest',
  description: 'argstest',
  usage: 'argstest'
};
