const commando = require('discord.js-commando');
const Discord = require('discord.js')
const YTDL = require('ytdl-core-discord');
var fetchVideoInfo = require('youtube-info')

async function play(connection, message){
    var server = servers[message.guild.id];
    var randomNumber = Math.floor(Math.random()*server.queue.length)
    nowPlaying = randomNumber
    server.dispatcher = connection.playOpusStream(await YTDL(server.queue[randomNumber]))  
    .on('end', () =>{
            if (connection.channel.members.array().length > 1) {
                play(connection, message)
            }
            else {
                const conf = new Discord.Attachment('https://cdn.discordapp.com/attachments/593081484869632011/601478144129499167/w3fozm1xpjo11.png')
                message.channel.send(conf);
                connection.disconnect()
            }
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
                        /*Category: Weeb */

"https://www.youtube.com/watch?v=vUoI6gU1_OY", /* Chika Dance */
"https://www.youtube.com/watch?v=9wnNW4HyDtg", /* Ayaya! Ayaya! Intensifies */
"https://www.youtube.com/watch?v=Nafii87gdzs", /* Evangelion */
"https://www.youtube.com/watch?v=n2rVnRwW0h8", /* Cowboy Bebop */
"https://www.youtube.com/watch?v=3dLqUADUNZ0", /* Attack on Titan */

/* Category: Meme */ 

"https://www.youtube.com/watch?v=Ud3nMv44SjA", /* Ah shit, here we go again */
"https://www.youtube.com/watch?v=Lmw4lzjEqD8", /* seal.mp4 */
"https://www.youtube.com/watch?v=_-k6ppRkpcM", /* the snow storm cant get us here */
"https://www.youtube.com/watch?v=dNQs_Bef_V8", /* Omae wa mou shindeiru */
"https://www.youtube.com/watch?v=kU5KxBYYneA", /* KUNAI WIT CHAIN! */
"https://www.youtube.com/watch?v=6n3pFFPSlW4", /* youve been gnomed.wmv */
"https://www.youtube.com/watch?v=JV5kXefmTLc", /* You got jebaited. Vengaboys */
"https://www.youtube.com/watch?v=q6EoRBvdVPQ", /* Yee */
"https://www.youtube.com/watch?v=XnQ-5uFuDtc", /* why you heff to be mad? */
"https://www.youtube.com/watch?v=IMoGdZLIRn8&list=LL72cjNtbukMkxI0-ohcwotQ&index=64&t=0s", /* Hot food vocoded to the piano dub */
"https://www.youtube.com/watch?v=9bdORiwoLho&list=PL9TSsKkE-7QJ-P3gKgXl_BL6WOfcIa1yd&index=5&t=0s", /* To Be Continued Sound Effect */
"https://www.youtube.com/watch?v=0BvfVM0sBfI", /* Oh shit a rat */

/* Category: Meme Song */

"https://www.youtube.com/watch?v=W3GrSMYbkBE", /* Despacito 2 (Parody Video) */
"https://www.youtube.com/watch?v=lXMskKTw3Bc", /* Never Gonna Hit Those Notes */
"https://www.youtube.com/watch?v=PfYnvDL0Qcw", /* We are Number One */
"https://www.youtube.com/watch?v=O-MQC_G9jTU", /* Shooting Stars */
"https://www.youtube.com/watch?v=09tzb8lkMwE", /* megalovania but beats 2 and 4 are swapped */
"https://www.youtube.com/watch?v=X2WH8mHJnhM", /* My Heart Will Go On- Recorder */
"https://www.youtube.com/watch?v=vE2ETqUGj6Q&list=PL9TSsKkE-7QK9q7OiPjAst9Gg2rR72wZa&index=2&t=0s", /* SpongeBob Trap Remix */
"https://www.youtube.com/watch?v=rY-FJvRqK0E&list=PL9TSsKkE-7QJ-P3gKgXl_BL6WOfcIa1yd&index=31&t=0s", /* Kero Kero Bonito */
"https://www.youtube.com/watch?v=dv13gl0a-FA&list=PL9TSsKkE-7QJ-P3gKgXl_BL6WOfcIa1yd&index=7&t=0s", /* Initial D- Deja Vu */
"https://www.youtube.com/watch?v=y6120QOlsfU&list=PL9TSsKkE-7QJ-P3gKgXl_BL6WOfcIa1yd&index=14&t=0s", /* Darude- Sandstorm */
"https://www.youtube.com/watch?v=ZZ5LpwO-An4&list=PL9TSsKkE-7QJ-P3gKgXl_BL6WOfcIa1yd&index=13&t=0s", /* HEYYEYAAEYAAAEYAEYAA */
"https://www.youtube.com/watch?v=9JRLCBb7qK8", /* Gay Frogs (Alex Jones REMIX) */
"https://www.youtube.com/watch?v=LDU_Txk06tM", /* Noisestorm - Crab Rave */
"https://www.youtube.com/watch?v=5NHt1k_9-J8", /* Ricardo meme song */
"https://www.youtube.com/watch?v=mj-v6zCnEaw", /* NOMA- Brain Power */
"https://www.youtube.com/watch?v=u3Jr9t_jFcE&list=LL72cjNtbukMkxI0-ohcwotQ&index=128", /* Kevin MacLeod ~ Volatile Reaction */
"https://www.youtube.com/watch?v=DuVJeJcMod0", /* 陳彼得 - 阿里巴巴 / Ali Baba (by Peter Chen) */
"https://www.youtube.com/watch?v=FSK5Gtf5bkA", /* Gym Battle vs. Turkey */
"https://www.youtube.com/watch?v=YYob4uDjEKI", /* Thomas the Tank Engine Theme Jazz Arrangement */
"https://www.youtube.com/watch?v=9xX8UnHTClk", /* September Star */
"https://www.youtube.com/watch?v=HguKyrS8oWM", /* Childish Flamingo */
"https://www.youtube.com/watch?v=OiR7JHrSHdA", /* K.K. Slider: K.K. Cruisin' */
"https://www.youtube.com/watch?v=OFjqEexH0Tg", /* Mermaid Sisters Song */
"https://www.youtube.com/watch?v=atuFSv2bLa8&feature=youtu.be", /* Manuel - Gas Gas Gas */
"https://www.youtube.com/watch?v=BJ0xBCwkg3E&list=PLYst6aAB-EKfs_Gyr9HTuRnlcLws8qvWH", /*Running in the 90's*/
"https://www.youtube.com/watch?v=bsOv7069Vsg", /*Interstellar Remix*/
"https://www.youtube.com/watch?v=X516W_0NPMQ", /*xQc Bohemian Rhapsody*/
"https://www.youtube.com/watch?v=NbVK9aMjwm0" /*Grandayy - Donald Trump - Night of Nights (Wall of Walls)*/
                    ]}
                    var i;
                    for(i=0; i < servers[message.guild.id].queue.length; i++){
                        var url = servers[message.guild.id].queue[i]
                        var id = url.substring(url.indexOf('=')+1,url.indexOf('=')+12)
                        await fetchVideoInfo(id).then(function (videoInfo) {
                            songs+=videoInfo.title + "\n"
                            songsArray.push(videoInfo.title)
                          });
                        //message.channel.send(servers[message.guild.id].queue[i])
                    }
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
