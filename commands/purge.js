const discord = require('discord.js');
const errors = require("../utils/errors.js");
module.exports.run = (client, message, args, tools) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');

  if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');
 

 message.channel.create
  message.channel.bulkDelete(args[0])
    // Thicc

}
module.exports.help = {
  name: "delete"
}