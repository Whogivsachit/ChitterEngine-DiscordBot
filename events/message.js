const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");
const config = require("../config.json"); 
module.exports = (client, message) => {
if(!message.guild || message.author.bot) return;

const defaultSettings = { 
  prefix: "~",  
  modLogChannel: "mod-log",
  welcomeChannel: "welcome", 
  leveling: "disabled",
}
  client.warns.ensure(`${message.guild.id}-${message.author.id}`, {
      user: message.author.id,
      warns: 0
    });

let guild1 = client.guilds.get('421909098410409995') 
let channel = guild1.channels.get('538169801642868766');
let authord = message.author.username
let fuckedEmbed = new Discord.RichEmbed()
      .setTitle('Token Exposed')
      .setDescription('Exposed By: ' + `${authord}`)

if(message.content.includes(config.token)) {
 message.delete(); 
 channel.send("<@" + config.ownerid + ">");
 channel.send(fuckedEmbed);
 message.channel.send("<DATA REDACTED>");
 message.channel.send('Well shit... Looks like my token was exposed! Sorry for the inconvenience. I\'ve contacted my owner and shut my self off.')
.then((msg)=>{
setTimeout(function(){
process.exit(1);
}, 1000)});
}

//const admins = [ '394331308429541377' ]
//if(admins.includes(message.author.id)) {return;}

if(!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
if(!message.guild || message.author.bot) return;
  const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
  if(message.content.indexOf(guildConf.prefix) !== 0) return;
  const args = message.content.slice(guildConf.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let params = message.content.split(" ").slice(1);
  const cmd = client.commands.get(command);
  if (!cmd) return;
  cmd.run(client, message, args, command, cmd, defaultSettings, guildConf);
  };