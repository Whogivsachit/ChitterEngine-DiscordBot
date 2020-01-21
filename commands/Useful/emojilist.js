const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async(client, message, args) => {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const embed = new Discord.RichEmbed()
            .setTitle('Emoji\'s') 
            .setAuthor(message.guild.name)
            .setColor('RANDOM') 
            .setDescription(List) 
            .setTimestamp() 
            .setFooter(message.guild.name) 
        message.channel.send(embed) 

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'emojilist',
  description: 'Lists this servers emojis.',
  usage: 'emojilist'
};
