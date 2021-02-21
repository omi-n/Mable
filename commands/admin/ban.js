module.exports = {
  name: 'ban',
  guildOnly: true,
  permissions: 'BAN_MEMBERS',
  banUser(message, args) {
    if(!message.mentions.users.size) {
      message.reply('You did not mention any users to ban!');
    }
    else {
      const user = message.mentions.users.first();
      var banReason = args.slice(1).join(" ");
      if(!banReason) banReason = 'didn\'t say why';
      const victim = message.guild.members.resolve(user);
      if(victim) {
        victim
          .ban({
            reason: banReason,
          })
          .then(() => {
            message.channel.send(`Successfully banned ${user.tag}.`);
          })
          .catch(err => {
            message.channel.send('Ban unsuccessful. Go check your code.');
            console.error(err);
          });
      }
      else {
        message.channel.send('User isn\'t in the server.');
      }
    }
  },
};
