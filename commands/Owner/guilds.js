const config = require('../../config.json');
exports.run = async (client, message, args) => {
  if(message.author.id !== config.ownerid) return message.channel.send({embed: { color: 15158332, description: `You are Not Authorized To Use This Command` } });
    const guildArray = client.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })

    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)

  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Owner',
  name: 'guilds',
  description: 'Displays all the servers the bots in.',
  usage: 'guilds'
};
