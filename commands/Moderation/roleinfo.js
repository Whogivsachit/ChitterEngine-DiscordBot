const Discord = require('discord.js');
const config = require('../../config.json');
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`VIEW_AUDIT_LOG\`` } });
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);
    if (!role) role = message.member.highestRole;

    const embed = new Discord.RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`Role: ${role.name}`)
        .addField('Members', role.members.size, true)
        .addField('Hex', role.hexColor, true)
        .addField('Creation Date', role.createdAt.toDateString(), true)
        .addField('Editable', role.editable.toString(), true)
        .addField('Managed', role.managed.toString(), true)
        .addField('ID', role.id, true);
    return message.channel.send({
        embed: embed
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Moderation',
  name: 'roleinfo',
  description: 'Shows information of a role.',
  usage: 'roleinfo <@role>'
};
