const fs = require("fs")
const request = require('snekfetch');
exports.run = (client, message, args) => {


args1 = args[0];
if (args1 < 1) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
request.get("https://minotar.net/helm/" + `${args1}` + "/100.png").then(r => {
           fs.writeFile(`head.jpg`, r.body, function(err, result) {
			   if(err) console.log('error', err);
   });
            message.channel.sendFile(r.body)
           fs.unlink(`./head.jpg`,function(err, result) {
            if(err) console.log('error', err);
})

}).catch(console.error);
};

            

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'head',
  description: 'Displays a minecraft head.',
  usage: 'head <name>'
};
