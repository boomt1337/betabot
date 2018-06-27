const superagent = require('superagent');
const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

try {
   function clean(text) {
      if (typeof(text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
        return text;
    }
    const bug = args.join(" ")
    if (!bug) return message.channel.send('Please specify a bug!')
    const content = clean(`**${message.author.username}**#${message.author.discriminator} (${message.author.id}) reported a bug:\n${bug}\nServer: **${message.guild.name}**\nID: **${message.guild.id}**`);
    const id = 'channel_id';
    new Promise((resolve, reject) => {
      superagent.post(`https://discordapp.com/api/channels/452579490934030336/messages`)
        .set('Authorization', `Bot ${client.token}`).send({ content })
        .end((err, res) => {
          if (err) {
            reject(err);
            message.reply('error happened. try again later.');
          } else {
            resolve(res);
            message.channel.send(`:white_check_mark: **${message.author.username}**, k sent to lazy boomt1337 for review`);
          }
        });
    });
}  catch (err) {
console.log(err)
}
}

module.exports.help = {
    name: "bug"
}