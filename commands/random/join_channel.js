const commando = require('discord.js-commando');
const Discord = require('discord.js')
const YTDL = require('ytdl-core');

function play(connection, message){
    var server = servers[message.guild.id];
    var randomNumber = Math.floor(Math.random()*server.queue.length)
    server.dispatcher = connection.playStream(YTDL(server.queue[randomNumber],{filter: "audioonly"}))
    server.dispatcher.on("end",function(){
        connection.disconnect();
    })
}
class JoinChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "join",
            group: "random",
            memberName: "join",
            description: "joins voice channel and plays random stuff"
        });
    }

    async run(message, args) {
        if (message.member.voiceChannel){
            if(!message.guild.voiceConnection){
                if(!servers[message.guild.id]){
                    servers[message.guild.id] = {queue: [
                        "https://www.youtube.com/watch?v=iS2s9deFClY", 
                        "https://www.youtube.com/watch?v=9wnNW4HyDtg", 
                        "https://www.youtube.com/watch?v=Ud3nMv44SjA", 
                        "https://www.youtube.com/watch?v=Lmw4lzjEqD8", 
                        "https://www.youtube.com/watch?v=_-k6ppRkpcM", 
                        "https://www.youtube.com/watch?v=dNQs_Bef_V8", 
                        "https://www.youtube.com/watch?v=kU5KxBYYneA", 
                        "https://www.youtube.com/watch?v=W3GrSMYbkBE", 
                        "https://www.youtube.com/watch?v=oGJr5N2lgsQ&t=9s", 
                        "https://www.youtube.com/watch?v=6n3pFFPSlW4", 
                        "https://www.youtube.com/watch?v=lXMskKTw3Bc", 
                        "https://www.youtube.com/watch?v=PfYnvDL0Qcw", 
                        "https://www.youtube.com/watch?v=O-MQC_G9jTU", 
                        "https://www.youtube.com/watch?v=09tzb8lkMwE", 
                        "https://www.youtube.com/watch?v=X2WH8mHJnhM", 
                        "https://www.youtube.com/watch?v=q6EoRBvdVPQ", 
                        "https://www.youtube.com/watch?v=XnQ-5uFuDtc"
                    ]}
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        var server = servers[message.guild.id]
                        message.channel.send('hi');
                        play(connection, message);
                    })
                    .catch(console.error)
            }
        }
        else{
            const conf = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593098453869920257/confused.jpg')
            message.channel.send(conf);
        }
    }
}

module.exports = JoinChannelCommand;