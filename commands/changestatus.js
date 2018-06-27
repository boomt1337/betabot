const {RichEmbed} = require("discord.js");
exports.run = async (client, message, args, level) => {
if (message.author.id == "440688656060252161") {
var nameResult = args.join(' ');
if (!nameResult) nameResult = null;
client.user.setActivity(nameResult, {type: "PLAYING"});
let embed = new RichEmbed()
.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
.setDescription(`${nameResult} is now my new Playing Game. (Set as PLAYING)`)
message.channel.send(embed)
} else {
  let embed2 = new RichEmbed()
  .setTitle("you are not boomt. access has been denied.")
  message.channel.send(embed2)
}
}

module.exports.help = {
  name: "status"
}