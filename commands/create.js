const discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  

function makeChannel(message){
    var server = message.guild;
    var name = message.author.username;

    server.createChannel(name, "general");
}
  
}
module.exports.help = {
 name: "createchannel"
}