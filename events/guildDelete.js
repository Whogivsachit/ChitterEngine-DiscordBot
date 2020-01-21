const Discord = require('discord.js');
const Enmap = require("enmap");
const chalk = require('chalk');
module.exports = (client, guild, guildConf, guildDelete) => {
   client.settings.delete(guild.id);
let guild1 = client.guilds.get('421909098410409995') 
let channel = guild1.channels.get('538169801642868766');
let owner = guild.owner

let joinEmbed = new Discord.RichEmbed()
      .setTitle('Guild Removed.')
      .setThumbnail(guild.iconURL)
      .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**\nGuild Owner: ${owner}` )

channel.send(joinEmbed);

};
