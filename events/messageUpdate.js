const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");
const config = require("../config.json"); 
module.exports = async (client, oldmsg, newmsg, messageUpdate) => {

client.settings.ensure(`${oldmsg.guild.id}`, {
      prefix: "~",  
      modLogChannel: "mod-log",
      welcomeChannel: "welcome", 
      leveling: "disabled"
    });
const modLogChannel1 = newmsg.member.guild.channels.find(x => x.name === client.settings.get(newmsg.member.guild.id, "modLogChannel"));
  if(!modLogChannel1) return;  
  if (oldmsg.content === newmsg.content) return;
  if (!oldmsg.guild) return;
  if (newmsg.author.bot) return;
  if(oldmsg.content.includes(config.token)) return;
  if(newmsg.content.includes(config.token)) return;
 const embed = new Discord.RichEmbed()
   .setColor(15158332)
   .setTimestamp()
   .addField('Action:', 'Message Update')
   .addField('User:', `${oldmsg.author.tag}`)
   .addField('Old Message:', `${oldmsg.content}`)
   .addField('New Message:', `${newmsg.content}`)
   .addField('Channel:', `${oldmsg.channel}`);
if(modLogChannel1.permissionsFor(oldmsg.guild.me).has("SEND_MESSAGES")) {
 oldmsg.guild.channels
    .find(x => x.name === client.settings.get(oldmsg.guild.id, "modLogChannel"))
    .send(embed)
    .catch(console.error);
  }
};