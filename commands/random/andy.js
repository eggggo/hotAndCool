const commando = require('discord.js-commando');
const Discord = require('discord.js')

class andy extends commando.Command {
    constructor(client) {
        super(client, {
            name: "andy",
            group: "random",
            memberName: "andy",
            description: "a tribute to andy, who is both hot AND cool. Also a more detailed info"
        });
    }

    async run(message, args) {
        const andyJAM = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593940049121378304/AndyJam.png');
        message.channel.send(andyJAM);
        message.channel.send('Andy Hot AND Cool'+"\n"
        +"Bot made by pepegga#0982, thesciencewizard#2620, bidoof#5988, and Fireshot90#8033"+"\n"
        +"This is a random bot that does random things, some of which include playing random Youtube clips(from a set list), replying to certain responses, and rolling random responses, all a result of our random server.");
    }
}

module.exports = andy;
