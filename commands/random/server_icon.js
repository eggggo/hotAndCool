const commando = require('discord.js-commando');
const fs = require('fs');

class ServerIconCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "serverIcon",
            group: "random",
            memberName: "serverIcon",
            description: "mix it up"
        });
    }

    async run(message, args) {
        if (!args) {
            message.channel.send('plox add an argument')
            const embed = new Discord.MessageEmbed()
            .setTitle('Commands list')
            .setColor('#DAF7A6')
            .addFields(
            {name: 'available commands:',
            value:"`random`\n`andy`\n`bene`\n`david`\n`edward`\n`ethan`\n`gene`\n`ianh`\n`ianx`\n`joe`\n`john`\n`jon`\n`justin`\n`patrick`\n`ryan`\n`memes`"}
            )
            message.channel.send(embed);
        }
        if (args == 'random') {
            var topicName = '';
            fs.readdir('../iconPics', (err, files) => {
                var numTopics = files.length;
                var topic = Math.floor(Math.random() * numTopics);
                topicName = files[topic];
            });
            var tgtPic = '';
            fs.readdir('../iconPics/' + topicName, (err, files) => {
                var numPics = files.length;
                var randomPic = Math.floor(Math.random() * numPics);
                tgtPic = files[randomPic];
            })
            const pic = new MessageAttachment('../iconPics/' + topicName + '/' + tgtPic);
            message.channel.send(pic);
        }
    }
}

module.exports = ServerIconCommand;