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

//google
let prefix;
const commands = client.commands = require('./commands');

client.on('MESSAGE_CREATE', (message, shard_id) => {
  if (message.author.bot || !prefix || !prefix.test(message.content)) return;
  const raven_context = {
    message,
    command: null,
  };
  try {
    let [command, ...args] = message.content.replace(prefix, '').trim().split(' ');
    if (!command) return;
    message.content = args.join(' ');
    if (command in commands) {
      command = commands[command];
      if (command.owner && message.author.id !== '173547401905176585') return;
    } else {
      message.content = `${command} ${message.content}`;
      command = commands.search;
    }
    raven_context.command = { command: command.name, args };
    logger.log('COMMAND', shard_id, command.name);
    command(message);
    client.stats.increment(`commands.${command.name}`);
  } catch (err) {
    const event = client.raven.captureException(err, {
      extra: raven_context,
    });
    logger.log('SENTRY EXCEPTION', event);
  }
});
//google end

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
client.login('NDE1NzAyNjU2MTgzNTY2MzM2.Dgn8gw.U9xDx1cX9qgo8oPhUA1Ai8W4gaM');
