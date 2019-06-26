const commando = require('discord.js-commando');
const client  = new commando.Client();
const config = require("./config.json");

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.on("ready", () =>{
  console.log('Bot Online');
})

client.login(config.token);