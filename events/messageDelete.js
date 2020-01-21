const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");
const config = require("../config.json"); 
module.exports = async (client, messageDelete) => {
const modLogChannel1 = messageDelete.member.guild.channels.find(x => x.name === client.settings.get(messageDelete.member.guild.id, "modLogChannel"));
if(!modLogChannel1) return;
if (messageDelete.content.length < 1) return
if (messageDelete.content.startsWith("~")) return
if (messageDelete.content.startsWith("-")) return
if(messageDelete.content.includes(config.token)) return;
const embed = new Discord.RichEmbed()
   .setColor(15158332)
   .setTimestamp()
   .addField('Action:', 'Message Deleted')
   .addField('User:', `${messageDelete.author.tag}`)
   .addField('Message Deleted:', `${messageDelete.content}`)
   .addField('Channel:', `${messageDelete.channel}`);
if(modLogChannel1.permissionsFor(messageDelete.guild.me).has("SEND_MESSAGES")) {
 messageDelete.guild.channels
    .find(x => x.name === client.settings.get(messageDelete.guild.id, "modLogChannel"))
    .send(embed)
    .catch(console.error);
    }
};