const commando = require('discord.js-commando');
const client  = new commando.Client();

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.login();