const commando = require('discord.js-commando');
const client  = new commando.Client();
const config = require("./config.json");

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.login('NTkyNzc1MjE1MjY0ODI1MzY3.XRIwOA.wLm1Q83lExRCOIyxHrp0zL6Pwgs');