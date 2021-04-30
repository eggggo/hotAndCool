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
        message.channel.send("yikes, you're kinda hardstuck");
        channel.send({files: ['hardstuck.mp3']})
    }
}

module.exports = FifteenCommand;
