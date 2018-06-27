const Discord = require("discord.js")
const client = require("discord.js")
module.exports.run = async (bot, message, args) => {
  
      if (message.author.id === "440688656060252161") {

var replies = ["Yeas!"]
 var result = Math.floor((Math.random() * replies.length) + 0);
    
   const embed = new Discord.RichEmbed()
   .setTitle('Results!')
   .addField(args, replies[result])
   message.channel.send({embed: embed})
}
   else {
                message.reply("Access denied.");
     console.log('some dirty noob decided to try and run bypassball... what a noob.');
            }
}
  module.exports.help = {
  name: "byball"
}