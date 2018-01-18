const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ping') {
     message.reply('pong');
    }

});

bot.login('NDAzNDA2NDg0MTE1MDMwMDE4.DUHJtw.UQMlPJDg2kUkTMwvEbv_Nx0ZUyY')
