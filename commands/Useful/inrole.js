const Discord = require('discord.js');
exports.run = (client, message, args) => {

let gg = message.content.substring(11, message.content.length-1);

const ListEmbed = new Discord.RichEmbed()
            .setTitle('Users with the role:')
            .setDescription(message.guild.roles.get(gg).members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed); 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'inrole',
  description: 'Displays all users in a role ( can be spammy )',
  usage: 'inrole <Role>'
};
