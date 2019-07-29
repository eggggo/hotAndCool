const commando = require('discord.js-commando');
const Discord = require('discord.js');
const YTDL = require('ytdl-core-discord');
var fetchVideoInfo = require('youtube-info');

class remove extends commando.Command {
    constructor(client) {
        super(client, {
            name: "remove",
            group: "random",
            memberName: "remove",
            description: "remove a song to the meme q"
        });
    }

    async run(message, args) {
        if (!args){
            message.channel.send('what are you removing mon')
        }
        if (findInArray(songsArray, args)!==-1){
            var index = findInArray(songsArray, args)
            servers[message.guild.id].queue.splice(index,1)
            songsArray.splice(index,1)
            var stringIndex = songs.indexOf(args)
            songs = songs.substring(0,stringIndex)+songs.substring(stringIndex+args.length)
            message.channel.send('removed '+args+' from your server queue')
        }
        else{
            message.channel.send('the server list doesn\'t have that clip mon')
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

module.exports = remove;
