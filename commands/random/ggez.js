const commando = require('discord.js-commando');

class ggez extends commando.Command {
    constructor(client) {
        super(client, {
            name: "ggez",
            group: "random",
            memberName: "",
            description: "toxic"
        });
    }

    async run(message, args) {
      var rand2 = Math.floor(Math.random()*6)
      const replies = ["Well played. I salute you all.",
      "For glory and honor! Huzzah comrades!",
      "I'm wrestling with some insecurity issues in my life but thank you all for playing with me.",
      "It's past my bedtime. Please don't tell my mommy.",
      "Gee whiz! That was fun. Good playing!",
      "I feel very, very small... please hold me..."
      ]
      message.channel.sendMessage(replies[rand2])
    }
}

module.exports = ggez;