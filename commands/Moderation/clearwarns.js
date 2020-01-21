const Discord = require('discord.js');
const settings = require('../../config.json');
exports.run = (client, message, args, defaultSettings) => {

let user = message.author;
let tagged = message.mentions.users.first();
let curLevel = 0;
client.warns.ensure(`${message.guild.id}-${user.id}`, {
      user: user.id,
      warns: 0
    });
const key = `${message.guild.id}-${user.id}`;
    client.warns.ensure(key, {
      user: user.username.id,
      warns: 0
    });

if (!args[0]) {
     message.channel.send({embed: { color: 15158332, description: `Your warns have been reset.` } });
      return client.warns.set(key, curLevel, "warns");
} else {
       message.channel.send({embed: { color: 15158332, description: `${tagged}'s warns have been reset.` } });
      return client.warns.set(`${message.guild.id}-${tagged.id}`, curLevel, "warns");
}




};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  category: 'Moderation',
  name: 'clearwarns',
  description: 'Clears your warns',
  usage: 'clearwarns <@user>'
};
