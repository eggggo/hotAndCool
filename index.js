const Discord = require('discord.js')
const commando = require('discord.js-commando');
const client  = new commando.Client({
  commandPrefix: "\\"
});
const config = require("./config.json");
const ytdl = require('ytdl-core-discord')

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

global.servers = [];

client.on("ready", () =>{
  console.log('Bot Online');
  client.user.setActivity("\\help for info", {type: "PLAYING"}).catch(console.error);
})

client.on('message', message=>{

  if(message.author == client.user){
    return
  }

  switch(message.content){
    case'I\'m hungry':
      var randomNumber = Math.floor(Math.random()*3+1)
      switch(randomNumber){
        case 1:
          message.channel.send('HAVE SOME LUCIO OHS')
        break;
        case 2:
          message.channel.send('ANDY HOT AND COOL')
        break;
        case 3:
          const kirbo = new Discord.Attachment('https://media.giphy.com/media/5ev3alRsskWA0/giphy.gif')
          message.channel.send(kirbo)
        break;
      }
    break;
    case '???':
    case '?!?!':
    case '!?!?':
        const nani = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593073499522859008/Nani.gif')
        message.channel.send(nani)
    break;
    case 'bye':
      message.channel.send('https://clips.twitch.tv/BlueMoldyClipzRlyTho')
    break;
    case 'gg ez':
      var rand2 = Math.floor(Math.random()*6)
      const replies = ["Well played. I salute you all.",
      "For glory and honor! Huzzah comrades!",
      "I'm wrestling with some insecurity issues in my life but thank you all for playing with me.",
      "It's past my bedtime. Please don't tell my mommy.",
      "Gee whiz! That was fun. Good playing!",
      "I feel very, very small... please hold me..."
      ]
      message.channel.send(replies[rand2])
    break;
    case 'amazing':
      message.channel.send('A-MEI-ZING')
    break;
    case 'plan':
      message.channel.send('RUSH B NO STOP')
    break;
    case 'AND DEY SAY':
      message.channel.send('CHIVALRY IS DEAD')
    break;
    case 'Mr. Stark':
      message.channel.send('I don\'t feel so good')
    break;
  }
  if (message.content.includes('who')){
    message.channel.send('me :)')
  }
  if (message.content.includes('thank')){
    message.channel.send("you're welcome :)")
  }
  if (message.content.includes('stop')){
    message.channel.send("no :)")
  }
})

client.login(config.token);