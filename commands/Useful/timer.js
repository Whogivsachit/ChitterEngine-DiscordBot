const Discord = require("discord.js");
const ms = require("ms");
exports.run = async(client, message, args) => {

 let Timer = args[0];

if(!args[0]){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}

if(args[0] <= 0){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}

message.channel.send({embed: { color: 15158332, description: `:white_check_mark: Timer has been set for: ${ms(ms(Timer), {long: true})}` } });

setTimeout(function(){
  message.channel.send({embed: { color: 15158332, description: `:white_check_mark: Times up! thats ${ms(ms(Timer), {long: true})} ` + message.author.toString() } });

}, ms(Timer));

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Useful',
  name: 'timer',
  description: 'Sets a timer.',
  usage: 'timer <time>'
};
