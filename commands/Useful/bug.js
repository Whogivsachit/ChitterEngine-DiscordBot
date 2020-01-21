const Discord = require('discord.js');
exports.run = (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);

    let bugn= args.slice(0).join(' ');
    if(bugn < 1) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
    message.channel.send({
      embed: {
        color: 4777662,
        description: `Thanks for submitting a bug!`
      }})

const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('Action:', 'Bug')
    .addField('User:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reported The Bug:', `${bugn}`)
    .addField('channel', `${message.channel}`);

  message.member.guild.channels
    .find("name", client.settings.get(message.member.guild.id, "modLogChannel"))
    .send(embed)
    .catch(console.error);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'bug',
  description: 'Reports a bug.',
  usage: 'bug <bug>'
};
