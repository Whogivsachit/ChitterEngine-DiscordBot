const Discord = require('discord.js');
const glob = require("glob");
exports.run = (client, message, args, defaultSettings, params) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);


glob('commands/**/*.js', (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
    if (!file.endsWith(".js")) return;
  });

 if (!args[0]) {
      const embed = new Discord.RichEmbed() 
    .setColor(0xFF0000)
    .setTimestamp()
    .setThumbnail("https://i.imgur.com/b5jTq6V.png")
    .setFooter("Coded by ~Whogivsachit " + `| ${files.length} Commands`)
    .setTitle(':small_red_triangle:  Help Page :small_red_triangle:')
    .setDescription("The Current Prefix of the bot on this server is " + `\`${guildConf.prefix}\`.` + `\n Need more information on what a command does? Do: ` + `\`${guildConf.prefix}help <cmd>\``)
    .addField("Fun", `${client.commands.filter(cmd => cmd.help.category === 'Fun').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
    .addField("Moderation", `${client.commands.filter(cmd => cmd.help.category === 'Moderation').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
    .addField("Useful", `${client.commands.filter(cmd => cmd.help.category === 'Useful').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
    .addField("Server Settings", `${client.commands.filter(cmd => cmd.help.category === 'guildOwner').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
    .addField("Owner", `${client.commands.filter(cmd => cmd.help.category === 'Owner').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
message.channel.send(embed);
  } else {
    let command = args[0];
    if(client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(` \`\`Description: ${command.help.description}\nUsage: ${command.help.usage}\`\`\ `);
    }
  }

});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'help',
  description: 'Get the current commands / Shows description & usage.',
  usage: 'help or help <command>'
};
