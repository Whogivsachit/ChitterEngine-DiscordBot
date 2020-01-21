const Discord = require('discord.js');
const config = require('../../config.json');
exports.run = async (client, message, args) => {
  if(message.author.id !== config.ownerid) return message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command` } });

 const embed = new Discord.RichEmbed()
  .setColor("#ff1d00")
  .setTitle("Bot is shutting down!")
  await message.channel.send(embed);
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  }); 
  process.exit(1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Owner',
  name: 'shutdown',
  description: 'Shutdown the bot.',
  usage: 'shutdown'
};
