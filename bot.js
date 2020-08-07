const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("741313578191290378")
setInterval(function() {
channel.send(`بحبك يشقاوه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);