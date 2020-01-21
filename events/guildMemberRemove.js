const Discord = require('discord.js');
const Enmap = require("enmap");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');
module.exports = async (client, member, message, guildMemberRemove) => {
  const welcomechannel1 = member.guild.channels.find(x => x.name === client.settings.get(member.guild.id, "welcomeChannel"));
  if(!welcomechannel1) return; 

const applyText = (canvas, text) => {
  const ctx = canvas.getContext('2d');
  let fontSize = 70;
  do {
    ctx.font = `${fontSize -= 10}px sans-serif`;
  } while (ctx.measureText(text).width > canvas.width - 300);

  return ctx.font;
};


const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext('2d');

  const background = await Canvas.loadImage('./data/wallpaper.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#74037b';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.font = '28px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`GoodBye,`, canvas.width / 2.5, canvas.height / 3.5);
  ctx.font = applyText(canvas, `${member.displayName}!`);
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

  ctx.beginPath();
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
  const avatar = await Canvas.loadImage(buffer);
  ctx.drawImage(avatar, 25, 25, 200, 200);

  const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

  member.guild.channels
    .find(x => x.name === client.settings.get(member.guild.id, "welcomeChannel"))
    .send(attachment)
    .catch(console.error);
};