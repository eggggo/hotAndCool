const commando = require('discord.js-commando');
const Discord = require('discord.js')

class LeaveChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "leave",
            group: "random",
            memberName: "leave",
            description: "leaves voice channel"
        });
    }

    async run(message, args) {
        if(message.member.voiceChannel.name){
            if(message.guild.voiceConnection){
                    message.member.voiceChannel.leave()
                    if(message.guild.voiceConnection){
                        const conf = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593098453869920257/confused.jpg')
                        message.channel.send(conf);
                    }
                    else{
                        message.channel.send('bye');
                    }
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

module.exports = LeaveChannelCommand;