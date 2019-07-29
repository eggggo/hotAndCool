const commando = require('discord.js-commando');
const Discord = require('discord.js');
const YTDL = require('ytdl-core-discord');

class np extends commando.Command {
    constructor(client) {
        super(client, {
            name: "np",
            group: "random",
            memberName: "np",
            description: "displays the current clip playing"
        });
    }

    async run(message, args) {
        if (message.guild.voiceConnection) {
            if (nowPlaying !== -1){
                message.channel.send("now playing: "+servers[message.guild.id].queue[nowPlaying])
            }
            else {
                const conf = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593098453869920257/confused.jpg')
                message.channel.send(conf);
            }
        }
        else {
            const conf = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593098453869920257/confused.jpg')
            message.channel.send(conf);
        }
    }
}

module.exports = np;
