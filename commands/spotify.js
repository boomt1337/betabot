const Discord = require('discord.js'); 
 
module.exports.run = async (bot, message, args) => {
 

  let user = message.mentions.users.first() || message.author; 
 
  
 if (user.presence.game !== null && user.presence.game.type === 'LISTENING' && user.presence.game.name === 'Spotify' && user.presence.game.assets !== null) {
      let trackIMG = `https://i.scdn.co/image/${user.presence.game.assets.largeImage.slice(8)}`;
      let trackURL = `https://open.spotify.com/track/${user.presence.game.syncID}`;
      let trackNAME = user.presence.game.details;
      let trackAuthor = user.presence.game.state;
      let trackAlbum = user.presence.game.assets.largeText;
 
    // Create embed object
    const embed = new Discord.MessageEmbed() 
      .setAuthor('Spotify Track Info', 'https://cdn.discordapp.com/emojis/408668371039682560.png') 
      .setColor(0x1ED760) // This sets the color of the embed
      .setThumbnail(trackIMG, true)
      .addField('Song Name', trackNAME, true)
      .addField('Album', trackAlbum, true)
      .addField('Author', trackAuthor, false)
      .addField('Listen to Track:', `[\`${trackURL}\`](trackURL)`, false); 
    
    message.channel.send(embed); 
   
  } else { 
   
    message.channel.send('**This user isn\'t listening to Spotify!**');
   
  }
 
 
};
module.exports.help = {
    name: "spotify"
}