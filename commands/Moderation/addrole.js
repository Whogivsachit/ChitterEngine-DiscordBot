const Discord = require('discord.js');
const config = require('../../config.json');
exports.run = (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
const modLog = message.member.guild.channels.find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"));
if (!message.member.hasPermission("MANAGE_ROLES")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_ROLES\`` } });
if (!modLog) return message.channel.send('You need To Define the mod-logs channel first.' + ` \`\`${guildConf.prefix}setlogs <channel>\`\` ` );

// <section>
// Actual Code Section
// </section>
    let member = message.guild.member(message.mentions.users.first());
    let name = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.find(x => x.name === name);
    if (message.mentions.users.size === 0 || !member || !role) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`\n Make sure you spelt the role right! case sensitive.` } });
    let botRolePosition = message.guild.member(client.user).highestRole.position;
    let rolePosition = role.position;
    if (botRolePosition <= rolePosition) return message.channel.send({embed: { color: 15158332, description: `:no_entry_sign: **Error:** Sorry! The role you requested is currently above my role.\n Please lower it first. or raise my role.` } });
    member.addRole(role).catch(e => {
        return message.channel.send(`:no_entry_sign: **Error:**\n${e}`);
    });
    message.channel.send({
      embed: {
        color: 4777662, 
        description: `I've added the **${name}** role to **${message.mentions.users.first().username}**.`
      }})

let user = message.mentions.users.first();
 const embed = new Discord.RichEmbed()
    .setColor(0x0000FF)
    .setTimestamp()
    .addField('Action:', 'addrole')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Role Added:', `${name}`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
  
  message.member.guild.channels
    .find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"))
    .send(embed)
    .catch(console.error);

// <section>
// Logger Section
// </section>
const fs = require('fs');
var d = new Date,
dformat = [d.getMonth()+1,d.getDate(),d.getFullYear()].join('/')+' '+[d.getHours(),d.getMinutes(),d.getSeconds()].join(':');
var stream = fs.createWriteStream("log.txt", {flags:'a'});
stream.write(`${dformat}  ` + `[ChitterEngine]: ${message.author.username}#${message.author.discriminator} Added The Role ${name} To ${message.mentions.users.first().username}` + "\n");
stream.end();

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  category: 'Moderation',
  name: 'addrole',
  description: 'Adds the specified role to the user.',
  usage: 'addrole <@user> <role>'
};

