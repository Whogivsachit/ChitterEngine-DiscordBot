const Discord = require("discord.js");
const glob = require("glob");
exports.run = async(client, message, args) => {
glob('commands/**/*.js', (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
    if (!file.endsWith(".js")) return;
  });
          const embed = new Discord.RichEmbed()
            .setColor('RANDOM')  
            .setTimestamp() 
            .addField("Commands", `${files.length}`, true)
            .addField("Events", `8`, true)
            message.channel.send(embed);
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'cmdcount',
  description: 'Lists the number of commands',
  usage: 'cmdcount'
};
