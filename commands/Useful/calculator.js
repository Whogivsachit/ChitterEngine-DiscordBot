const Discord = require('discord.js');
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

exports.run = (client, message, args) => {


if(args.legnth < 1) return message.channel.send({embed: { color: 15158332, description: `You must provide a equation to be solved on the calculator` } });
    const question = args.join(' ');
if(!question) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.channel.send({embed: { color: 15158332, description: `Invalid math equation.` } });
    }

    message.delete();

const embed = new Discord.RichEmbed() 
    .setColor(0xFF0000)
    .setTimestamp()
    .addField("**Equation:**", `\`\`\`\n${question}\n\`\`\``)
    .addField("**Answer:**", `\`\`\`\n${answer}\n\`\`\``)
    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'calculator',
  description: 'Calculates something.',
  usage: 'calculator <question>'
};

