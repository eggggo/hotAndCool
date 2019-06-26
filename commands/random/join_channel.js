const commando = require('discord.js-commando');
const Discord = require('discord.js')

class JoinChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "join",
            group: "random",
            memberName: "join",
            description: "joins voice channel"
        });
    }

    async run(message, args) {
        if (message.member.voiceChannel){
            if(!message.guild.voiceConnection){
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.channel.send('joined');
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