const Discord = require('discord.js');
exports.run = async (client, message, args,) => {

let question = message.content.split(" ").slice(1).join(" ");
    const answers = [
        'As I See It Yes',
        'Ask Again Later',
        'Better Not Tell You Now',
        'Cannot Predict Now',
        'Concentrate and Ask Again',
        'Don\'t Count On It',
        'It Is Certain', 'It Is Decidely So',
        'Most Likely',
        'My Reply Is No',
        'My Sources Say No',
        'Outlook Good',
        'Outlook Not So Good',
        'Reply Hazy Try Again',
        'Signs Point to Yes',
        'Very Doubtful',
        'Without A Doubt',
        'Yes',
        'Yes - Definitely'
    ];

    if (!question) {
    return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
    }
    const embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
  .setAuthor(`8ball`, 'http://8ballsportsbar.com/wp-content/uploads/2016/02/2000px-8_ball_icon.svg_.png')
  .addField('Info:', `**Your Question:** ${question}\n**My Prediction:** ${answers[~~(Math.random() * answers.length)]}`);
    message.channel.send({embed}).catch(e => logger.error(e))

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Fun',
  name: '8ball',
  description: 'Ask the 8ball a question.',
  usage: '8ball <question>'
};






