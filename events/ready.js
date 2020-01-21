const Enmap = require("enmap");
const chalk = require('chalk');

module.exports = (client, guild, defaultSettings, message) => {
 console.log(chalk.bgGreen.black(`>>> Bot is online and spying on its users`));

let statuses = [`${client.users.size.toLocaleString()} Users ` + `in ${client.guilds.size} Guilds`, `~help`, `Creator: Whogivsachit`]
    setInterval(function() {
        let status = statuses[Math.floor(Math.random()*statuses.length)];
        client.user.setPresence({ game: { name:status }, status: 'online' });
    }, 10000)
};
