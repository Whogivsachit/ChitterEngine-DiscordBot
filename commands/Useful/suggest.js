const Discord = require('discord.js');
exports.run = (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);


    if (!args[0]) return;
    if (args[0] === "bug") return msg.reply("Please give a suggestion.");
    args = args.join(" ");
    message.channel.send({
      embed: {
        color: 4777662,
        description: `Thank you for suggesting something! we will take a look at it!`
      }})

    const embed = new Discord.RichEmbed()
    .setColor(4777662)
    .setTimestamp()
    .addField('Action:', 'Suggest')
    .addField('User:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Suggested The feature:', `${args}`)
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
  name: 'suggest',
  description: 'Suggest something to the current server owners.',
  usage: 'suggest <suggestion>'
};
