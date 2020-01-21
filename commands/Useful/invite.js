const Discord = require('discord.js');
exports.run = (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);


const embed = new Discord.RichEmbed() 
    .setColor(0xFF0000)
    .setTimestamp()
    .setThumbnail("https://i.imgur.com/b5jTq6V.png")
    .setFooter("Coded by ~Whogivsachit")
    .setTitle(':small_red_triangle:  Invite me here. :small_red_triangle:')
    .setDescription("Thank you for inviting me to your guild! It really means alot!")
    .addField("Link:", `[Invite Link](https://discordapp.com/oauth2/authorize?client_id=497624614139068418&scope=bot&permissions=999999999999)`)


message.channel.send(embed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'invite',
  description: 'Link to invite me to your server. Thank you for inviting me :D',
  usage: 'invite'
};
