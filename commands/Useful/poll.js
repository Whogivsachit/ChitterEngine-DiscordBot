const Discord = require("discord.js");
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_MESSAGES\`` } });
 let question = args.slice(0).join(' ');

  if (question.length === 0)
  return message.reply('**Invalid Format:** `~Poll <Question>`')

  const embed = new Discord.RichEmbed()
  .setTitle("A Poll Has Been Started!")
  .setColor("#5599ff")
  .setDescription(`${question}`)
  .setFooter(`Poll Started By: ${message.author.username}`, `${message.author.avatarURL}`)

  message.channel.send({embed})
  .then(msg => {
    msg.react('👍')
    msg.react('👎')
    msg.react('🤷')
  })
  .catch(() => console.error('Emoji failed to react.'));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'poll',
  description: 'Polls a question.',
  usage: 'poll <Question>'
};
