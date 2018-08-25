const fs = require("fs")
const botconfig = require("./botconfig.json")
const Discord = require("discord.js")
const bot = new Discord.Client({fetchAllMembers: true})


bot.commands = new Discord.Collection()

process.on("error", console.error)
bot.on("ready", async () => {
	console.log(`${bot.user.username} is now on!`)
	bot.user.setActivity("My vids", {type: "PLAYING"});

})


bot.on('message', message => {
    let msg = message.content.toUpperCase();

if (msg.includes(`CRACKING`)) {
    message.delete();
 }
if (msg.includes(`CRACK`)) {
   message.delete();

}
if (msg.includes(`COMBOLIST`)) {
 message.delete();
}
if (msg.includes(`NIGGER`)) {
 message.delete();
}
if (msg.includes(`NIGGA`)) {
 message.delete();
}
if (msg.includes(`NIGGERS`)) {
 message.delete();
}
if (msg.includes(`HACK`)) {
 message.delete();
}
if (msg.includes(`HACKS`)) {
 message.delete();
}
if (msg.includes(`CHEAT`)) {
 message.delete();
}
if (msg.includes(`CHEATS`)) {
 message.delete();
}
if (msg.includes(`PROXIES`)) {
 message.delete();
}
if (msg.includes(`CRACK`)) {
 message.delete();
}
if (msg.includes(`CRACKING`)) {
 message.delete();
}
if (msg.includes(`CRACKS`)) {
 message.delete();
}
if (msg.includes(`BOTNET`)) {
 message.delete();
}
if (msg.includes(`DDOS`)) {
 message.delete();
}
	if (msg.includes(`STRESSER`)) {
 message.delete();
}
if (msg.includes(`BOOTER`)) {
 message.delete();
}

});

bot.login(process.env.BOT_TOKEN);
