const Discord = require('discord.js')
const commando = require('discord.js-commando');
const client  = new commando.Client({
  commandPrefix: "\\"
});
const config = require("./config.json");
const ytdl = require('ytdl-core-discord')
var emoji = [];

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

global.servers = [];
global.nowPlaying = -1;
global.songsArray = [];
global.songs = ""

client.on("ready", () =>{
  console.log('Bot Online');
  client.user.setActivity("\\help for info", {type: "PLAYING"}).catch(console.error);
})

client.on('message', message=>{

  if(message.author == client.user){
    return
  }
  
  let args = message.content.split(" ")
  
  if (message.content.startsWith('\:')){
      var eID = message.content.substring(message.content.lastIndexOf(':')+1,message.content.lastIndexOf('>'))
      emoji[eID]++;
  }
  
  if (message.content === 'listEmojiUse'){
    const emojiList = message.guild.emojis.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n');
    message.channel.send(emojiList);
  }
  if (args[0] === 'random') {
    try{
    if (args[1] && args[2] && !isNaN(args[1]) && !isNaN(args[2])) {
      var rand1 = args[1]
      var rand2 = args[2]
      var randomNum = Math.floor(Math.random()*(Math.abs(rand2-rand1)+1)+Math.min(rand1, rand2))
      message.channel.send(randomNum)
    }
      else {
        const conf = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593098453869920257/confused.jpg')
        message.channel.send(conf);
      }
    }
    catch(ArrayIndexOutofBoundsError){ 
      const conf = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593098453869920257/confused.jpg')
      message.channel.send(conf);
    }
  }
  
  if (message.content === 'https://cdn.discordapp.com/emojis/570961161734979584.png?v=1'){
    const andyHead = new Discord.Attachment('https://cdn.discordapp.com/attachments/593081484869632011/636018599957364766/ANDY_IS_HOT_AND_COOL_AND_HAS_AN_ASTRONOMICALLY_IMMENSE_ENCEPHALON1.gif')
    message.channel.send(andyHead);
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
    case 'lol':
      message.channel.send('no ian :)')
    break;
  }
  if (message.content.includes('thank')){
    message.channel.send("you're welcome :)")
  }
  if (message.content.includes('who ')){
    message.channel.send('me :)')
  }
  if (message.content.toLowerCase().includes('rishab')){
      message.channel.send('\"Andy owes me dinner\"')
}
  if (message.content.includes('<:geneHead:627501925033705482>')){
     const andyHead = client.emojis.find(emoji => emoji.name === "andyHead");
     const clap = client.emojis.find(emoji => emoji.name === "clapGif");
     message.channel.send(`${andyHead} ${clap}`);
  }
  if (message.content === 'xqcDitch'){
     const xqcDitch = client.emojis.find(emoji => emoji.name === "xqcDitch");
     message.channel.send(`${xqcDitch}`);
  }
  if (message.content.toLowerCase().substring(0,3).includes('is ') || 
           message.content.toLowerCase().substring(0,5).includes('does ') || 
           message.content.toLowerCase().substring(0,7).includes('should ') ||
           message.content.toLowerCase().substring(0,4).includes('was ') || 
           message.content.toLowerCase().substring(0,5).includes('will ') || 
           message.content.toLowerCase().substring(0,6).includes('could ') ||
           message.content.toLowerCase().substring(0,4).includes('can ')  ||
           message.content.toLowerCase().substring(0,4).includes('are ') ||
           message.content.toLowerCase().substring(0,3).includes('am ') ||
           message.content.toLowerCase().substring(0,3).includes('do ')){
    var rand = Math.floor(Math.random()*3)
    if (rand === 0){
      const yep = client.emojis.find(emoji => emoji.name === "YEP");
      message.channel.send(`${yep}`);
    }
    else if (rand === 1){
      const nop = client.emojis.find(emoji => emoji.name === "NOP");
      message.channel.send(`${nop}`);
    }
    else if (rand === 2){
      const uhm = client.emojis.find(emoji => emoji.name === "UHM");
      message.channel.send(`${uhm}`);
    }
  }
  else if (message.content.includes('stop')){
    message.channel.send("no :)")
  }
  else if (message.content.includes('ok gene')){
    var rand = Math.floor(Math.random()*15)+1
      var os = ''
      var i = 0
      for (i = 0; i < rand; i++){
        os += 'o'
      }
      var okIan = os + 'k ian'
      message.channel.send(okIan)
  }
})

client.on('messageUpdate', (oldMessage, newMessage) => {
   if(newMessage.content.includes('<:geneHead:627501925033705482>')){
     const andyHead = client.emojis.find(emoji => emoji.name === "andyHead");
     const clap = client.emojis.find(emoji => emoji.name === "clapGif");
     newMessage.channel.send(`${andyHead} ${clap}`);
   }
})

client.on('messageReactionAdd', (messageReaction, user) => {
if(user.bot)  return;
const { message, emoji } = messageReaction;
if(emoji.name === "geneHead") {
    const andyHead = client.emojis.find(emoji => emoji.name === "andyHead");
     const clap = client.emojis.find(emoji => emoji.name === "clapGif");
     newMessage.channel.send(`${andyHead} ${clap}`);
 } 
})

client.login(process.env.token);
