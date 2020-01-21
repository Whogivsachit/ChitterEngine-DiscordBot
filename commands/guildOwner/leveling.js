const Discord = require('discord.js');
exports.run = async (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
const modLog = message.member.guild.channels.find(x => x.name === client.settings.get(message.member.guild.id, "modLogChannel"));
if (!message.member.hasPermission("MANAGE_GUILD")) return  message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command.\n Permission Required: \`MANAGE_GUILD\`` } });
if (!modLog) return message.channel.send('You need To Define the mod-logs channel first.' + ` \`\`${guildConf.prefix}setlogs <channel>\`\` ` );

client.settings.ensure(`${message.guild.id}`, {
      prefix: "~",  
      modLogChannel: "mod-log",
      welcomeChannel: "welcome", 
      leveling: "disabled"
    });


 let levelingstat = client.settings.get(message.guild.id, "leveling");

if(levelingstat === "disabled") {
  message.channel.send({embed: { color: 0x00A2E8, description: `Leveling Turned On.`} });
  return client.settings.set(message.guild.id, "enabled", `leveling`);
}
if(levelingstat === "enabled") {
  message.channel.send({embed: { color: 0x00A2E8, description: `Leveling Turned Off.`} });
  return client.settings.set(message.guild.id, "disabled", `leveling`);  
}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'guildOwner',
  name: 'leveling',
  description: 'Toggles the lvling system.',
  usage: 'leveling'
};






