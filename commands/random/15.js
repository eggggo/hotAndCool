const commando = require('discord.js-commando');
const Discord = require('discord.js')

class FifteenCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "15",
            group: "random",
            memberName: "15",
            description: "ff15"
        });
    }

    async run(message, args) {
        message.channel.send('yikes, you're kinda hardstuck');
        const hardstuckmp3 = new Discord.Attachment('hardstuck.mp3');
        message.channel.send(hardstuckmp3);
       }
}

module.exports = FifteenCommand;
