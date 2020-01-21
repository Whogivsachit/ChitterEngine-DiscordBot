const Discord = require('discord.js');
exports.run = (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);

  const embed = new Discord.RichEmbed() 
    .setColor(0xFF0000)
    .setTimestamp()
    .setThumbnail("https://i.imgur.com/b5jTq6V.png")
    .setTitle(':small_red_triangle:  Credit Page :small_red_triangle:')
    .addField("Coders", `Whogivsachit - Main Coder`)
    .addField("Friends", `FrozenPvps - Gave me the idea to make a bot.\n Trey - Gives me ideas.\n Oofsl - Good friend of mine. Helps sometimes with testing.\n Nova - Motivation`)
    .addField("\u200b", `Thank you. I would like to thank you for using ChitterEngine :D It means alot`)
message.channel.send(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'credits',
  description: 'Shows the bots credits.',
  usage: 'credits'
};
