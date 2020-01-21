const Discord = require('discord.js');
exports.run = (client, message) => {
var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
.addField("Today is", `\`${Day}\` ,\`${Month}\` ,\`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
message.channel.send({ embed })
    message.react("🕰")   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'time',
  description: 'Displays the time.',
  usage: 'time'
};
