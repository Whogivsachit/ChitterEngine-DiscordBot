const Enmap = require('enmap');
exports.run = async (client, message, defaultSettings, args, command) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);

  let user = message.mentions.users.first();
  if(!user) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
  return message.channel.send({embed: { color: 0x00A2E8, description: `**${message.author.tag}** has banned **${user.tag}** from this server.* Just kidding.` } });
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: []
};

exports.help = {
category: 'Fun',
name: 'fakeban',
description: 'Fake ban someone as a joke.',
usage: 'fakeban <@user>'
};