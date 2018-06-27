const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
  
var replies = ["Yeas!", "Hell no!", "Hmm, can't think atm. Try again.", "Maybe?", "Probably not."]
 var result = Math.floor((Math.random() * replies.length) + 0);
    
   const embed = new Discord.RichEmbed()
   .setTitle('Results!')
   .addField(args, replies[result])
   message.channel.send({embed: embed})
}
  module.exports.help = {
  name: "8ball"
}