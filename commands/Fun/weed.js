const puppy = require('random-puppy');
exports.run = async (client, message, args) => {
  message.channel.send('**BISSSSHES IM SMOKING**').then(async msg => {
  setTimeout(() => {
    msg.edit('🚬');
  }, 500);
  setTimeout(() => {
    msg.edit('🚬 ☁ ');
  }, 1000);
  setTimeout(() => {
    msg.edit('🚬 ☁☁ ');
  }, 1000);
  setTimeout(() => {
    msg.edit('🚬 ☁☁☁ ');
  }, 1000);
  setTimeout(() => {
    msg.edit('🚬 ☁☁');
  }, 1000);
  setTimeout(() => {
    msg.edit('🚬 ☁');
  }, 1000);
  setTimeout(() => {
    msg.edit('🚬 ');
  }, 1000);
  setTimeout(() => {
    msg.edit(`Finished smoking`);
  }, 1000);
});
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'weed',
  description: 'Get high.',
  usage: 'weed'
};

