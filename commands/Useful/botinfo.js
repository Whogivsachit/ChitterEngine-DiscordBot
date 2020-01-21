const cooldown = new Set();
const Discord = require("discord.js");
const package = require("../../package.json")
const os = require('os');
const osName = require('os-name');
const glob = require("glob");
exports.run = async (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);


  let guild = message.guild;
  var bpmb = client.ping;
  var bpm = bpmb.toFixed()
  var usageMb = process.memoryUsage().heapUsed / 1024 / 1024;
  var usage = usageMb.toFixed(2);
glob('commands/**/*.js', (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
    if (!file.endsWith(".js")) return;
  })

const embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} Info Below`, client.user.displayAvatarURL)
    .addField(":heart: BPM", bpm, true)
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(3118751)
    .addField("Ram usage", `${usage}MB / 32GB`, true)
    .addField("Discord.js", `${Discord.version}`, true)
    .addField("Chitterengine", `${package.version}`, true)
    .addField("npm", `${process.version}`, true)
    .addField("Users", `${client.users.size.toLocaleString()}`, true)
    // .addField("Bot Platforn:", os.process.platform(), true)
    .addField("Channels Overall", client.channels.size, true)
    .addField("Guilds Overall", client.guilds.size, true)
    .addField("Os", osName(), true)
    .addField("Prefix", guildConf.prefix, true)
    .addField("Commands", files.length, true)
    .addField("Bot Owner", `Whogivsachit`, true);
  message.channel.send({
    embed
  }).catch(e => logger.error(e))

})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'botinfo',
  description: 'Displays bot related information.',
  usage: 'botinfo'
};