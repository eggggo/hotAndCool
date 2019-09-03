const commando = require('discord.js-commando');
const Discord = require('discord.js')

class vcshare extends commando.Command {
    constructor(client) {
        super(client, {
            name: "vcshare",
            group: "random",
            memberName: "vcshare",
            description: "gives a link for users in a vc to be able to share screens and camera views"
        });
    }

    async run(message, args) {
        var baseLink = "http://www.discordapp.com/channels/"
        var serverID = message.guild.id
        var vcID = message.member.voiceChannelID
        var vcName = message.member.voiceChannel.name
        if(serverID && vcID && vcName){
            message.channel.send(baseLink+serverID+"/"+vcID)
            message.channel.send("VC share link active in "+vcName)
        }
        else{
            const conf = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593098453869920257/confused.jpg')
            message.channel.send(conf);
        }
    }
}

module.exports = vcshare;
