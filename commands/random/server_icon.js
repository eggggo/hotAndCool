const commando = require('discord.js-commando');
const Discord = require('discord.js')
const fs = require('fs');

class ServerIconCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "server_icon",
            group: "random",
            memberName: "server_icon",
            description: "mix it up"
        });
    }

    async run(message, args) {
        if (!args) {
            message.channel.send('plox add an argument')
            message.channel.send('available commands:')
            var files = fs.readdirSync('./iconPics');
            message.channel.send(files)
        } else {
            if (args == 'random') {
                var files = fs.readdirSync('./iconPics');
                var numTopics = files.length;
                var topic = Math.floor(Math.random() * numTopics);
                var topicName = files[topic];
                files = fs.readdirSync('./iconPics/'+topicName);
                var numPics = files.length;
                var randomPic = Math.floor(Math.random() * numPics);
                var tgtPic = files[randomPic];
                const pic = './iconPics/' + topicName + '/' + tgtPic;
                message.guild.setIcon(pic);
            } else {
                try {
                    files = fs.readdirSync('./iconPics/' + args);
                    var numPics = files.length;
                    var randomPic = Math.floor(Math.random() * numPics);
                    var tgtPic = files[randomPic];
                    const pic = './iconPics/' + args + '/' + tgtPic;
                    message.guild.setIcon(pic);
                } catch (error) {
                    message.channel.send('we have no pics of what you asked for sowwy');
                }
            }
        }
    }
}

module.exports = ServerIconCommand;