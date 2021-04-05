const commando = require('discord.js-commando');
const Discord = require('discord.js')
const fs = require('fs');
var promiseQueue = [];

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
        var copy = promiseQueue.slice();
        copy.forEach(function(item, index, array){
            if (item.isFulfilled()) {
                promiseQueue.splice(index, index);
            }
        })
        if (!args) {
            message.channel.send('plox add an argument')
            message.channel.send('available commands:')
            var files = fs.readdirSync('./iconPics');
            message.channel.send(files)
        } else {
            if (args == 'random') {
                var files = fs.readdirSync('./iconPics');
                var topicName = files[Math.floor(Math.random() * files.length)];
                files = fs.readdirSync('./iconPics/'+topicName);
                var tgtPic = files[Math.floor(Math.random() * files.length)];
                const pic = './iconPics/' + topicName + '/' + tgtPic;
                var promise = MakeQuerablePromise(message.guild.setIcon(pic));
                if (promiseQueue.length === 0) {
                    promiseQueue.push(promise);
                } else {
                    message.channel.send('chill out too fast');
                }
            } else {
                try {
                    files = fs.readdirSync('./iconPics/' + args);
                    var tgtPic = files[Math.floor(Math.random() * files.length)];
                    const pic = './iconPics/' + args + '/' + tgtPic;
                    var promise = MakeQuerablePromise(message.guild.setIcon(pic));
                    if (promiseQueue.length === 0) {
                        promiseQueue.push(promise);
                    } else {
                        message.channel.send('chill out too fast');
                    }
                } catch (error) {
                    message.channel.send('we could not do what you asked sowwy');
                }
            }
        }
    }
}

 function MakeQuerablePromise(promise) {
    // Don't modify any promise that has been already modified.
    if (promise.isResolved) return promise;

    // Set initial state
    var isPending = true;
    var isRejected = false;
    var isFulfilled = false;

    // Observe the promise, saving the fulfillment in a closure scope.
    var result = promise.then(
        function(v) {
            isFulfilled = true;
            isPending = false;
            return v; 
        }, 
        function(e) {
            isRejected = true;
            isPending = false;
            throw e; 
        }
    );

    result.isFulfilled = function() { return isFulfilled; };
    result.isPending = function() { return isPending; };
    result.isRejected = function() { return isRejected; };
    return result;
}

module.exports = ServerIconCommand;