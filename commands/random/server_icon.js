const commando = require('discord.js-commando');
const Discord = require('discord.js')
const fs = require('fs');
var promiseQueue = [];
var leaderboard = [];
var files = fs.readdirSync('./iconPics');
for (var i = 0; i < files.length; i ++) {
    leaderboard[i] = 0;
}

class ServerIconCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "si",
            group: "random",
            memberName: "si",
            description: "mix the server icon up"
        });
    }

    async run(message, args) {
        var copy = promiseQueue.slice();
        copy.forEach(function(item, index, array){
            if (item.isFulfilled()) {
                promiseQueue.splice(index, 1);
            }
        })
        if (!args) {
            message.channel.send('plox add an argument')
            message.channel.send('available commands:')
            var files = fs.readdirSync('./iconPics');
            message.channel.send(files)
        } else {
            if (args === 'leaderboard') {
                var leaderboardList = '';
                for (var i = 0; i < leaderboard.length; i ++) {
                    leaderboardList.concat(files[i] + ': ' + leaderboard[i] + '\n');
                }
                message.channel.send(leaderboardList);
            }
            else if (args === 'random') {
                var files = fs.readdirSync('./iconPics');
                var personIndex = Math.floor(Math.random() * files.length);
                var topicName = files[personIndex];
                files = fs.readdirSync('./iconPics/'+topicName);
                var tgtPic = files[Math.floor(Math.random() * files.length)];
                const pic = './iconPics/' + topicName + '/' + tgtPic;
                if (promiseQueue.length === 0) {
                    var promise = MakeQuerablePromise(message.guild.setIcon(pic));
                    promiseQueue.push(promise);
                    leaderboard[personIndex] ++;
                } else {
                    message.channel.send('chill out too fast');
                }
            } else {
                try {
                    var lowercaseArgs = args.toLowerCase();
                    files = fs.readdirSync('./iconPics/' + lowercaseArgs);
                    var tgtPic = files[Math.floor(Math.random() * files.length)];
                    const pic = './iconPics/' + lowercaseArgs + '/' + tgtPic;
                    if (promiseQueue.length === 0) {
                        var promise = MakeQuerablePromise(message.guild.setIcon(pic));
                        promiseQueue.push(promise);
                        leaderboard[fs.readdirSync('./iconPics').indexOf(lowercaseArgs)] ++;
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