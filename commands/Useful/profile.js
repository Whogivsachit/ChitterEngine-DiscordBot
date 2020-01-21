const Discord = require('discord.js');
const moment = require('moment');
exports.run = (client, message, args) => {
let taggeduser = message.mentions.users.first()

 if (!args[0]) {
    const embed = new Discord.RichEmbed();
      embed.addField("Username", `${message.author.username}#${message.author.discriminator}`, true)
          .addField("ID", `${message.author.id}`, true)
          .setColor(3447003)
          .setFooter(' ', ' ')
          .setThumbnail(`${message.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${message.author.avatarURL}`)
          .addField('Currently', `${message.author.presence.status.toUpperCase()}`, true)
          .addField('Game', `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`, true)
          .addField('Joined Discord', `${moment(message.author.createdAt).format('MM.DD.YY')}`, true)
          .addField('Joined Server', `${moment(message.member.joinedAt).format('MM.DD.YY')}`, true)
          .addField('Roles', `${message.member.roles.filter(x => x.name).size}`, true)
          .addField('Is Bot', `${message.author.bot.toString().toUpperCase()}`, true)
          message.channel.send(embed);
  } else {
     const embed1 = new Discord.RichEmbed();
     embed1.addField("Username", `${taggeduser.username}`, true)
     .addField("ID", `${taggeduser.id}`, true)
     .setColor(3447003)
          .setFooter(' ', ' ')
          .setThumbnail(`${taggeduser.avatarURL}`)
          .setTimestamp()
          .setURL(`${taggeduser.avatarURL}`)
          .addField('Currently', `${taggeduser.presence.status.toUpperCase()}`, true)
          .addField('Game', `${taggeduser.presence.game === null ? "No Game" : taggeduser.presence.game.name}`, true)
          .addField('Joined Discord', `${moment(taggeduser.createdAt).format('MM.DD.YY')}`, true)
          .addField('Joined Server', `${moment(taggeduser.joinedAt).format('MM.DD.YY')}`, true)
          .addField('Roles', `<Removed in 3.0>`, true)
          .addField('Is Bot', `${taggeduser.bot.toString().toUpperCase()}`, true)
          message.channel.send(embed1);
    
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'profile',
  description: 'Display your profile.',
  usage: 'userinfo <@user>'
};


