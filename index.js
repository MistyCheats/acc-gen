const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']});

const token = "TOKEN HERE";
usedCommansRecently4 = new Set();

client.on('ready', () =>{
    console.log('bot is online')
    client.user.setActivity(`Mistys Slave`, { type: "WATCHING" })
});
client.on('message', message =>{
    if (message.content === "hello"){
        message.author.send('hi');
    };
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === "-gen"){
    if (usedCommansRecently4.has(message.author.id)){
        message.channel.send('Cooldown Message')
    } else{
        usedCommansRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommansRecently4.delete(message.author.id);
        }, 10000)
    var string = "DATA IN HERE"
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});


client.login(token);


