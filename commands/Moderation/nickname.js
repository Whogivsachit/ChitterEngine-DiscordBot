const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_NICKNAMES\`` } });
    let nickname = args.slice(1).join(' ');
  let user = message.mentions.users.first();
    if (nickname.length < 1 || user.length < 1) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
let RolePosition = message.guild.member(message.mentions.users.first()).highestRole.position;
  let botRolePosition = message.guild.member(client.user).highestRole.position;
  if (botRolePosition <= RolePosition || !message.guild.member(user).bannable) return message.channel.send({embed: { color: 15158332, description: `The User you requested is currently to powerful!` } });

  message.guild.members.get(user.id).setNickname(nickname);
  await message.channel.send({
    embed: new Discord.RichEmbed()

      .setTitle(`Changed Nickname to ${nickname}`)
  })

};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  category: 'Moderation',
  name: 'nick',
  description: 'Changes the nickname of a user.',
  usage: 'nick <@user> <New Name>'
};
