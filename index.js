const Discord = require('discord.js');
const client  = new Discord.Client();
const config = require("./config.json")

const token = 'NTkyNzc1MjE1MjY0ODI1MzY3.XREREQ.LTshbeNPOI94GlfxVLoWDQvq6Ao';

client.on('ready', () => {
    console.log(`yes`);
  });

client.login(config.token);

//ok gene
//test revision number 2
//Hello Ethan
//Happy Birthday to me :)
