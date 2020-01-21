const Discord = require('discord.js');
exports.run = async (client, message) => {
message.channel.send({
      embed: {
        color: 4777662,
        description: `There are ${message.member.guild.memberCount} members in this guild.`
      }})

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'membercount',
  description: 'Displays the user count of this server.',
  usage: 'membercount'
};
