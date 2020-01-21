const cooldown = new Set();
const Discord = require("discord.js");
const package = require("../../package.json")
const os = require('os');
exports.run = async (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);


  var usageMb = process.memoryUsage().heapUsed / 1024 / 1024;
  var usage = usageMb.toFixed(2);
	let totalSeconds = (client.uptime / 1000);
	let days = Math.floor(totalSeconds / 86400);
	let hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	let seconds1 = totalSeconds % 60;
	let seconds = Math.round(seconds1);


const embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} Info Below`, client.user.displayAvatarURL)
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(3118751)
    .addField("Os", "Linux / Ubuntu 16.04")
    .addField('❯ Cpu', `${require('os').cpus().length} Cores / Intel(R) Xeon(R) CPU E5-2670 v2 @ 2.50GHz`)
    .addField('❯ Memory', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB / 240GB`)
    .addField('❯ Disk', ` 534mb / 1tb`)
    .addField('❯ Uptime', `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`)
  message.channel.send({
    embed
  }).catch(e => logger.error(e))

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'specs',
  description: 'Displays the vps\'s specs',
  usage: 'specs'
};