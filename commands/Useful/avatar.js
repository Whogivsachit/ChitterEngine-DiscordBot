const Discord = require("discord.js");
exports.run = (client, msg, args) => {
 if (!args[0]) {
let avatar = msg.author.avatarURL;
  const embed1 = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setImage(`${avatar}`)
    .setFooter(`Avatar For: ${msg.author.username}`)
    .setColor('#71A3BE');  
    if(!avatar) return;
    msg.channel.send(embed1);
    } else {
let taggeduser = msg.mentions.users.first()
if(!taggeduser) return;
let avatartag = taggeduser.avatarURL;
  const embed2 = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setImage(`${avatartag}`)
    .setFooter(`Avatar For: ${taggeduser.username}`)
    .setColor('#71A3BE');  
    if(!avatartag) return;
    msg.channel.send(embed2);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'avatar',
  description: 'Displays yours or mentioned persons avatar.',
  usage: 'avatar <@user>'
};




