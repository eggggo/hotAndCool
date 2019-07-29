const commando = require('discord.js-commando');
const Discord = require('discord.js');
const YTDL = require('ytdl-core-discord');
var fetchVideoInfo = require('youtube-info');

class add extends commando.Command {
    constructor(client) {
        super(client, {
            name: "add",
            group: "random",
            memberName: "add",
            description: "add a song to the meme q"
        });
    }

    async run(message, args) {
        if (!args){
            message.channel.send('what are you adding mon')
        }
        if (findInArray(servers[message.guild.id].queue, args)===-1){
            var songTitle = ""
            servers[message.guild.id].queue.push(args);
            var id = args.substring(args.indexOf('=')+1,args.indexOf('=')+12)
                await fetchVideoInfo(id).then(function (videoInfo) {
                    songTitle = videoInfo.title
                    songs+=videoInfo.title + "\n"
                    songsArray.push(videoInfo.title)
                });
            message.channel.send('added '+songTitle+' to your server queue')
        }
        else{
            message.channel.send('the server list already has that clip mon')
        }
    }
    
}

function findInArray(ar, val) {
    for (var i = 0,len = ar.length; i < len; i++) {
        if ( ar[i] === val ) { // strict equality test
            return i;
        }
    }
    return -1;
}

module.exports = add;
