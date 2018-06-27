const Discord = require("discord.js")
const Weather = require("weather-js")

module.exports.run = async (bot, message, args) => {
  
 Weather.find({search: args.join(" "), degreeType: 'C'}, function(err,result) {
     if (err) message.channel.send('error finding weather. if you keep getting this message ping or dm boomt1337#3590 immediently');
     
     if (result === undefined || result.length === 0)  {
       message.channel.send('REEEE! ENTER AN ACTUAL CITY!!!!')
       return;
     }
     
     var current = result[0].current;
     var location = result[0].location;
     
     const embed = new Discord.RichEmbed()
     .setDescription('**THIS IS IN BETA. DO NOT RELY ON IT FOR YOUR DAILY COMMUTE. owner is working on it**')
    .setAuthor(`Here de weather for ${current.observationpoint}`)
    .setThumbnail(current.imageUrl) 
    .setColor(0x00AE86)
    .addField('Timezone', `UTC${location.timezone}` , true)
    .addField('Degree Type',location.degreetype, true)
    .addField('Temperature', `${current.temperature} Degrees`, true)
    .addField('Feels Like', `${current.feelsLike} Degrees`, true)
    .addField('Winds',current.winddisplay, true)

     
     message.channel.send({embed});
 });
}
module.exports.help = {
  name: "weather"
}