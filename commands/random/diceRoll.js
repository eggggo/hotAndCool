const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "roll",
            group: "random",
            memberName: "roll",
            description: "Experience Twitch chat"
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        if(roll == 1) {
            message.channel.sendMessage("“I’M NOT BEGGING FOR AN ALL ACCESS PASS. I’M SIMPLY ASKING MULTIPLE STRANGERS MANY TIMES TO SPEND $15 ON ME” LUL");
        }
        else if(roll == 2) {
            message.channel.sendMessage("PogChamp GOATS is very fun to watch and very interactive! PogChamp ($5 has been transferred to your PayPal account, remember to remove this message when sharing in chat)");
        }
        else if (roll == 3) {
            message.channel.sendMessage("It starts with a charging Rein. Janus floods the enemy team. His teammates race back and forth behind closed eyelids. Janus dies. Dead. Now it’s up to the Justice to decide what to do with it.");
        }
        else if (roll == 4) {
            message.channel.sendMessage("Jake has huge RipTires, he is one of the best players in OWL, when Jake isn't beating up people in Overwatch, he's beating people in real life so you better think before you say J LUL K E. Peace out.");
        }
        else if (roll == 5) {
            message.channel.sendMessage("Why don't people like Brigitte? I can't be the only one who loves being stunned the entire game. Shield bash is so amazing and really makes for some intense and fun gameplay. Thanks Blizzard");
        }
        else {
        message.channel.sendMessage("LEARN PLAT CHAT! C9 is losing the team fight on the point uncontested during overtime But alot of players now say C9 when they WIN a point and losing the fight when the time runs out.");
        }

    }
}

module.exports = DiceRollCommand;