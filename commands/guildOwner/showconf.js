const Discord = require('discord.js');
const Enmap = require('enmap');
exports.run = (client, message, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);

const embed = new Discord.RichEmbed() 
    .setColor(0xFF0000)
    .setTimestamp()
    .setFooter("Coded by ~Whogivsachit")
    .setTitle(':small_red_triangle:  ShowConf Page :small_red_triangle:')
    .setDescription("This is your servers current configuration!")
    .addField("Prefix", `${client.settings.get(message.guild.id, "prefix")}`, true)
    .addField("Leveling", `${client.settings.get(message.guild.id, "leveling")}`, true)
    .addField("LogChannel", `${client.settings.get(message.guild.id, "modLogChannel")}`)
    .addField("WelcomeChannel", `${client.settings.get(message.guild.id, "welcomeChannel")}`)
  message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'guildOwner',
  name: 'showconf',
  description: 'Shows the current Server configuration',
  usage: 'showconf'
};
