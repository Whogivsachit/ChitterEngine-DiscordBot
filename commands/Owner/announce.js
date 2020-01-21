const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('../../config.json');
exports.run = (client, message, args) => {
if(message.author.id !== config.ownerid) return message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command` } });
let announcementchannel =  message.guild.channels.find(x => x.name === 'announcements');
if (!announcementchannel) return message.reply('I cannot find a Announcement channel');
let announcement = args.slice().join(' ');
if(!announcementchannel || announcement < 1) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });

const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setTitle('Bot Update | Announcement')
    .setDescription(announcement);
   
    return client.channels.get(announcementchannel.id).send({embed});
	message.channel.send("announcement sent successfully");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Owner',
  name: 'announce',
  description: 'Announces a message from the bot.',
  usage: 'annouce <message>'
};
