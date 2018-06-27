const {RichEmbed} = require("discord.js");
const errors = require("../utils/errors.js");
module.exports.run = async (client, message, args, level) => {
  
 
  // EMBED
  let embed = new RichEmbed()
  .setColor("#ff1d00")
  .setTitle("reloading commands. if you are boomt, look at glitch console log. if not, if you are caught spamming this cmd you will be banned from the bot")
  await message.channel.send(embed); // send the embed
  // unload all commands before shutting down

  // you can always leave out this code // (cmd part)
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  }); // end of cmd function

  // shut down the bot
  process.exit(1);
}; // end of code
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["boot off", "shutdown"],
  permLevel: "Bot Admin"
};
module.exports.help = {
  name: "reboot"
}