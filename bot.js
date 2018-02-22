const { Client } = require('discord.js');
const bot= new Client();
const cfg = require ('./config.json');

bot.on('ready', () => {
  console.log('Im ready to blast noobs!');
  bot.user.setActivity('Wreck-it Noob'); 
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
  if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('Nice try, you aren\'t an admin, loser.. jk.');
  const member = msg.mentions.members.first();
  if (!member) return msg.reply('Invalid usage, please try `b.ban @User#1234`');
  member.ban({
    reason: `Banhammer falls by ${msg.author.tag}`
  });
  msg.channel.send `${msg.mentions.users.first()} got rekt by ${msg.author}`
}
  if (command === 'kick') {
  if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('Nice try, you aren\'t an admin, loser.. jk.');
  const member = msg.mentions.members.first();
  if (!member) return msg.reply('Invalid usage, please try `b.kick @User#1234`');
  member.kick({
    reason: `${msg.mentions.users.first()} got noscoped by ${msg.author.tag}`
  });
  msg.channel.send `${msg.mentions.users.first()} got booted by ${msg.author}`
  }
  if (command === 'help') {
    msg.channel.send('Commands are currently: ban,kick,reportabug,help,ping. We encourage you to use reportabug to report bugs/new ideas.')
  }
  if (command === 'reportabug') {
      msg.channel.send('to report bugs, please go on this GitHub issue: https://github.com/boomt1337/betabot/issues/1. To see what is being fixed, go to the Projects tab.')
  }
});

        
        
bot.login(cfg.token);
