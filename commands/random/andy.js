const commando = require('discord.js-commando');

class andy extends commando.Command {
    constructor(client) {
        super(client, {
            name: "andy",
            group: "random",
            memberName: "andy",
            description: "andy hot AND cool"
        });
    }

    async run(message, args) {
        message.channel.send(client.user.displayAvatarURL);
        message.channel.send('Andy Hot AND Cool');
    }
}

module.exports = andy;