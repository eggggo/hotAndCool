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
        message.channel.send('https://cdn.discordapp.com/avatars/592775215264825367/0bc192b3d8808f84b4147eba50d223d0.png?size=2048');
        message.channel.send('Andy Hot AND Cool');
    }
}

module.exports = andy;