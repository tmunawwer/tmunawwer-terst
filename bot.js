const Discord = require('discord.js');
const client = new Discord.Client();
var days = 1;
var go = false;
var song = false;
var sent = false;
var ans = '';
var time = 0;
client.on('ready', () => {
    //console.log('I am ready!');
    client.user.setStatus("Offline");
});

client.on('message', message => {
    ans = message.content;
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === 'pong') {
    	message.reply('ping');
  	}
    //:V's
    if(message.content == ':V'){
        message.reply('V:');
    }
    if(message.content == ':v'){
        message.reply('v:');
    }
    if(message.content == '>:V'){
        message.reply('V:<');
    }
    if(message.content == '>:v'){
        message.reply('v:<');
    }
    //:U's
    if(message.content == ':U'){
        message.reply('U:');
    }
    if(message.content == ':u'){
        message.reply('u:');
    }
    if(message.content == '>:U'){
        message.reply('U:<');
    }
    if(message.content == '>:u'){
        message.reply('u:<');
    }
    //:Y's
    if(message.content == ':Y'){
        message.reply('Y:');
    }
    if(message.content == ':y'){
        message.reply('y:');
    }
    if(message.content == '>:Y'){
        message.reply('Y:<');
    }
    if(message.content == '>:y'){
        message.reply('y:<');
    }
    //:D's
    if(message.content == ':D'){
        message.reply('D:');
    }
    if(message.content == ':d'){
        message.reply('d:');
    }
    if(message.content == '>:D'){
        message.reply('D:<');
    }
    if(message.content == '>:d'){
        message.reply('D:<');
    }
    //:C's
    if(message.content == ':C'){
        message.reply('C:');
    }
    if(message.content == ':c'){
        message.reply('c:');
    }
    if(message.content == '>:C'){
        message.reply('C:<');
    }
    if(message.content == '>:c'){
        message.reply('c:<');
    }
    //:P's
    if(message.content == ':P'){
        message.reply('P:');
    }
    if(message.content == ':p'){
        message.reply('p:');
    }
    if(message.content == '>:P'){
        message.reply('P:<');
    }
    if(message.content == '>:p'){
        message.reply('p:<');
    }
    //:O's
    if(message.content == ':O'){
        message.reply('o:');
    }
    if(message.content == ':o'){
        message.reply('o:');
    }
    if(message.content == '>:O'){
        message.reply('O:<');
    }
    if(message.content == '>:o'){
        message.reply('o:<');
    }
    //:3's
    if(message.content == ':3'){
        message.reply('3:');
    }
    if(message.content == '>:3'){
        message.reply('3:<');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login('NDEE1NzAyNjU2MTgzNTY2MzM2.Dgn8gw.U9xDx1cX9qgo8oIPhUA1Ai8W4gaM');
