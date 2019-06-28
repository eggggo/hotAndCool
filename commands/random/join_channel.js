const commando = require('discord.js-commando');
const Discord = require('discord.js')
const YTDL = require('ytdl-core-discord');

async function play(connection, message){
    var server = servers[message.guild.id];
    var randomNumber = Math.floor(Math.random()*server.queue.length)
    server.dispatcher = connection.playOpusStream(await YTDL(server.queue[randomNumber]))    
    .on('end', () =>{
            connection.disconnect()
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
                        "https://www.youtube.com/watch?v=1S6QDZ47MQE", 
                        "https://www.youtube.com/watch?v=6n3pFFPSlW4", 
                        "https://www.youtube.com/watch?v=lXMskKTw3Bc", 
                        "https://www.youtube.com/watch?v=PfYnvDL0Qcw", 
                        "https://www.youtube.com/watch?v=O-MQC_G9jTU", 
                        "https://www.youtube.com/watch?v=09tzb8lkMwE", 
                        "https://www.youtube.com/watch?v=X2WH8mHJnhM", 
                        "https://www.youtube.com/watch?v=q6EoRBvdVPQ", 
                        "https://www.youtube.com/watch?v=XnQ-5uFuDtc",
                        "https://www.youtube.com/watch?v=IMoGdZLIRn8&list=LL72cjNtbukMkxI0-ohcwotQ&index=64&t=0s",
                        "https://www.youtube.com/watch?v=vE2ETqUGj6Q&list=PL9TSsKkE-7QK9q7OiPjAst9Gg2rR72wZa&index=2&t=0s",
                        "https://www.youtube.com/watch?v=9wnNW4HyDtg",
                        "https://www.youtube.com/watch?v=rY-FJvRqK0E&list=PL9TSsKkE-7QJ-P3gKgXl_BL6WOfcIa1yd&index=31&t=0s",
                        "https://www.youtube.com/watch?v=9bdORiwoLho&list=PL9TSsKkE-7QJ-P3gKgXl_BL6WOfcIa1yd&index=5&t=0s",
                        "https://www.youtube.com/watch?v=dv13gl0a-FA&list=PL9TSsKkE-7QJ-P3gKgXl_BL6WOfcIa1yd&index=7&t=0s",
                        "https://www.youtube.com/watch?v=y6120QOlsfU&list=PL9TSsKkE-7QJ-P3gKgXl_BL6WOfcIa1yd&index=14&t=0s",
                        "https://www.youtube.com/watch?v=ZZ5LpwO-An4&list=PL9TSsKkE-7QJ-P3gKgXl_BL6WOfcIa1yd&index=13&t=0s",
                        "https://www.youtube.com/watch?v=9JRLCBb7qK8",
                        "https://www.youtube.com/watch?v=LDU_Txk06tM",
                        "https://www.youtube.com/watch?v=5NHt1k_9-J8",
                        "https://www.youtube.com/watch?v=mj-v6zCnEaw"
                    ]}
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.channel.send('hi');
                         play(connection, message)
                    })
                    .catch(console.error)
            }
            else{
                const conf = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593098453869920257/confused.jpg')
                message.channel.send(conf);
            }
        }
        else{
            const conf = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593098453869920257/confused.jpg')
            message.channel.send(conf);
        }
    }
}

module.exports = JoinChannelCommand;