const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async(client, message, args) => {

let guildId = 595738125595050024;
if(message.guild.id != guildId) return;
  
    let nickname = args.slice(0).join(' ');
    if (nickname.length < 1) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });

  message.guild.members.get(message.member.id).setNickname(nickname);
  await message.channel.send({
      embed: {
        color: 4777662, 
        description: `I changed Your nickname to : ${nickname}.`
      }})

};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  category: 'Moderation',
  name: 'nickname',
  description: 'Changes the nickname of a user.',
  usage: 'nickname <New Name>'
};
