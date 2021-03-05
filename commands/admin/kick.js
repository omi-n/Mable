module.exports = {
  name: 'kick',
  guildOnly: true,
  permissions: 'KICK_MEMBERS',
  execute(message, args) {
    if(!message.mentions.users.size) {
      message.reply('You did not mention any users to kick!');
    }
    else {
      const user = message.mentions.users.first();
      var kickReason = args.slice(1).join(" ");
      if(!kickReason) kickReason = 'didn\'t say why';
      const victim = message.guild.members.resolve(user);
      if(victim) {
        victim
          .kick(kickReason)
          .then(() => {
            message.channel.send(`Successfully kicked ${user.tag}.`);
          })
          .catch(err => {
            message.channel.send('Kick unsuccessful. Go check your code.');
            console.error(err);
          });
      }
      else {
        message.channel.send('User isn\'t in the server.');
      }
    }
  },
};
