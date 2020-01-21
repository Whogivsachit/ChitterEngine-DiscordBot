const Discord = require("discord.js");
const malScraper = require('mal-scraper');
exports.run = async(client, message, args) => {
  const search = `${args}`;
if(search < 1) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.RichEmbed()
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor('#ffc1cc') //I personally use bubblegum pink!
      .addField('English Title', data.englishTitle, true)
      .addField('Japanese Title', data.japaneseTitle, true)
      .addField('Type', data.type, true)
      .addField('Episodes', data.episodes, true)
      .addField('Rating', data.rating, true)
      .addField('Aired', data.aired, true)
      .addField('Score', data.score, true)
      .addField('Score Stats', data.scoreStats, true)
      .addField('Link', data.url);
if(!data.englishTitle || !data.japaneseTitle || !data.url) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
      message.channel.send(malEmbed);

      //console.log(data);
    })
    .catch((err) => console.log(err));

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'anime',
  description: 'Searches information from my anime list.',
  usage: 'anime <anime name>'
};
