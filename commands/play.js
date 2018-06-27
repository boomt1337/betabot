const Discord = require("discord.js");
const YTDL = require("ytdl-core");
function play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, message);
        else connection.disconnect();
    })
}
var servers = {};
module.exports.run = (bot, message, args) => {
    //play
    if (!args[0]) {
         message.channel.send("Please specify a link, not words. search function will arrive later.");
         return
    }
    
    if(!message.member.voiceChannel) {
        message.channel.send("..how am i able to play music when you're not even in an vc");
    }

    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    }
    var server = servers[message.guild.id];

    server.queue.push(args[0]);
    message.channel.send("OKEY DOKEY! PLAYING RN!!!!!")
    if(!message.member.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
    })
}

module.exports.help = {
    name: "play"
}