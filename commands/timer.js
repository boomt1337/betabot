const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

let Timer = args[0];

if(!args[0]){
  return message.channel.send("enter a number and with either S-M-H at the end. smh....")
}

if(args[0] <= 0){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end! oh look it spells SMH! nice")
}

message.channel.send(":white_check_mark: Timer has been set for: " + `${ms(ms(Timer), {long: true})}`)
  
  setTimeout(function(){
  message.channel.send(`Timer has ended, it lasted: ${ms(ms(Timer), {long: true})}` + message.author.toString())

}, ms(Timer));
}
module.exports.help = {
    name: "timer"
}
