const config = require("./config.json"); 
const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const Enmap = require('enmap');
const glob = require("glob");
const fs = require('fs');

// <Summary>
// Enmap Section
// </Summary>
client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});

client.points = new Enmap({name: "points"});
client.warns = new Enmap({name: "warns"});
client.queue = new Map();
var servers = {};
// <Summary>
// CommandHandler Section 
// </Summary>
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
glob('commands/**/*.js', (err, files) => {
    if (err) console.log(err);
    console.log(`Starting ChitterEngine Please Stand By...`);
    files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./` + file);
    let commandName = file.split(".")[0];
    client.commands.set(props.help.name, props);
    console.log(`Loaded Command: ${props.help.name} `);
  });
  console.log(`>>> Loaded a total of ${files.length} commands.`);
  console.log(`>>> Events Loaded Successfully`);
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

// <Summary>
// Event Section === I wanted to put them externaly ( not in app.js ) but im to lazy to figure that out :D
// </Summary>
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

// <Summary>
// Extra Section == For random crap the bot needs to run.
// </Summary>

client.login(config.token);