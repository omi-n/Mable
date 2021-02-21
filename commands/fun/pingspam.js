module.exports = {
  name: 'pingspam',
  guildOnly: true,
  permissions: 'ADMINISTRATOR',
  pingspam(message, args) {
    if(!message.mentions.users.first()) {
      message.channel.send('You did not pick a user to spam.');
    }
    else if(typeof args[0] != Number) {
        for(var i = 0; i < args[0]; i++) {
          for(var j = 1; j < args.length; j++) {
            var victim = args[j];
            message.channel.send(`ping ${victim}`);
          }
        }
    }
  },
};
//  you are welcome for the spagetti :)
