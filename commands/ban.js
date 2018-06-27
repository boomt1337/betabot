const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let user = args[0];
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "BAN_MEMBERS");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

  bUser.send('test');
    let incidentchannel = message.guild.channels.find(`name`, "moderation-logs");
    if(!incidentchannel) return message.channel.send("omg i cant find mod-logs channel PANICCCCCCCC");
   
   
    
    message.guild.member(user).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"pban"
}
