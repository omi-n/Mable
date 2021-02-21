module.exports = {
  name: 'kick',
  permissions: 'KICK_MEMBERS',
  kickUser(message, args) {
    if(!message.mentions.users.size) {
      message.reply('You did not mention any users to kick!');
    }
    else {
      const user = message.mentions.users.first();
      const victim = message.guild.members.resolve(user);
      if(victim) {
        victim.kick('bot').then(() => {
          message.channel.send('successfully kicked user!');
        });
      }
    }
  },
};
