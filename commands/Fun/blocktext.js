exports.run = async (client, message, args) => {
 let blockedChars = args.join(' ').toLowerCase().
    replace(/[a-z]/g, ':regional_indicator_$&:').
    replace(/1/g, ':one:').
    replace(/2/g, ':two:').
    replace(/3/g, ':three:').
    replace(/4/g, ':four:').
    replace(/5/g, ':five:').
    replace(/6/g, ':six:').
    replace(/7/g, ':seven:').
    replace(/8/g, ':eight:').
    replace(/9/g, ':nine:').
    replace(/0/g, ':zero:');
    let description = `Usage:` + "``!blocktext GG``"
 if (args < 1) {
        return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
    }
  message.channel.send(blockedChars).catch(e => logger.error(e));
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: 'blocktext',
  description: 'Converts your text to blocktext.',
  usage: 'blocktext <text>'
};