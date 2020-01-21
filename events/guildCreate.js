const Discord = require('discord.js');
const Enmap = require("enmap");
const chalk = require('chalk');
module.exports = async (client, guild, message, guildConf, guildDelete) => {
let guild1 = client.guilds.get('421909098410409995') 
let channel = guild1.channels.get('538169801642868766');
let owner = guild.owner

let joinEmbed = new Discord.RichEmbed()
      .setTitle('Guild Joined.')
      .setThumbnail(guild.iconURL)
      .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**\nGuild Owner: ${owner}` )

channel.send(joinEmbed);


};
