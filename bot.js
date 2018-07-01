 const { Client } = require('discord.js');
const bot= new Client();
const cfg = require ('./config.json');

bot.on('ready', () => {
  console.log('Im ready to blast noobs!');
  bot.user.setActivity('back from the dead DUN DUN DUN| Release 1.2 Private Beta Channel | 4 Guilds'); 
});

bot.on ('message', msg => {
  if (msg.author.bot || !msg.content.startsWith(cfg.prefix)) return;
  const args = msg.content.slice(cfg.prefix.length).split(' ')
  const command = args.shift().toLowerCase()
  if (command === 'ping') {
    const then = Date.now();
    msg.channel.send('Pinging...').then(m => {
        m.edit(`Pong! It took ${Date.now() - then}ms to send that message!\nDiscord Heartbeat:${bot.ping}`);
    });
  }
if (command === 'ban') {
  if (!msg.member.permissions.has("KICK_MEMBERS")) return msg.reply('You try and weild the BANHAMMER TM, but you are too weak to be able... Technical details: User missing permission KICK_MEMBERS');
  const member = msg.mentions.members.first();
  if (!member) return msg.reply('Invalid usage, please try `&kick @user#1234  `');
  if (!member.bannable) return msg.reply('uf too powerful');
  member.ban({
    reason: `Banhammer falls by ${msg.author.tag}`
  });
  msg.channel.send ('**K, I rekt that user :ok_hand:**')
}
  if (command === 'kick') {
    if (!msg.member.permissions.has("KICK_MEMBERS")) return msg.reply('You try and weild the BANHAMMER TM, but you are too weak to be able... Technical details: User missing permission KICK_MEMBERS');
  const member = msg.mentions.members.first();
  if (!member) return msg.reply('Invalid usage, please try `&kick @user#1234  `') 
  if (!member.kickable) return msg.reply('uf too powerful (Requested member is higher than you (in ranks) )');
  member.ban({
    reason: `Banhammer falls by ${msg.author.tag}`
  });
  }
  if (command === 'help') {
    msg.reply('DMed instructions!!')
    msg.author.sendMessage("HERE ARE THE CURRENT COMMANDS: ban: Bans an user. (ID bans coming soon) kick: Kicks an member. mute: Broken atm, fixing soon. Ping: Finds the bot's MS and HeartBeat times. Any issues should be adressed here: https://github.com/boomt1337/betabot .")
  }
  if (command === 'reportabug') {
      msg.channel.send('to report bugs, please go on this GitHub issue: https://github.com/boomt1337/betabot/issues/1. To see what is being fixed, go to the Projects tab.')
  }
  if (command == 'botinfo') {
 
  msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "BETABOT",
    url: 'https://github.com/boomt1337/betabot',
    description: "An bot made by an newbie, hence the name 'betabot.'",
    fields: [{
        name: "Bot Commander",
        value: "boomt1337#3590"
      },
      {
        name: "Invite link",
        value: "https://discordapp.com/api/oauth2/authorize?client_id=403406484115030018&permissions=8&scope=bot"
      },
      {
        name: "Special thanks",
        value: "Friends: khuza#5599 (IRL), Savanna#8525, Chriskc2#7847, ひでのり#7193. Coding happened with thanks to: An Idiots Guide, TheSourceCode, Avicii (RIP), codecadamy."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© boomt1337 2018."
    }
  }
});
    
}
  if (command === 'randomnumber') {
    msg.channel.send(Math.random)
  }
  if (command === 'restartbot') {
  msg.channel.send('HA, you cant restart me! anyways my commander can please dm gone#3214')
  }
  if (command === 'work') {
    msg.channel.send('You typed work command... have' + Math.random() / Math.random() )
  }
  if (command === 'support') {
    msg.channel.send('Join support server to call the owner a lazy ass... wait pls dont he will be mad >:( https://discord.gg/bDVtF4Z')
  }
  if (command === 'ball') {
msg.channel.send('ooof')
  }
  if (command === 'purge30') {
    msg.delete(30)
  }
});
const http = require ('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log("HI! I am still alive");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);    
        
bot.login(cfg.token);
