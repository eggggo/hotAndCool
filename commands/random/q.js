const commando = require('discord.js-commando');
const Discord = require('discord.js');
const YTDL = require('ytdl-core-discord');
var fetchVideoInfo = require('youtube-info');

class q extends commando.Command {
    constructor(client) {
        super(client, {
            name: "q",
            group: "random",
            memberName: "q",
            description: "displays the current server q"
        });
    }

    async run(message, args) {
        if (servers[message.guild.id].queue[0]){
            message.channel.send('the current server q consists of: ')
            message.channel.send(songs)
        }
    }
}

module.exports = q;
