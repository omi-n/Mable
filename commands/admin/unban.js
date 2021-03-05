module.exports = {
  name: 'unban',
  guildOnly: true,
  permissions: 'BAN_MEMBERS',
  execute(message, args) {
    var user = args[0];

    message.guild.members.unban(user).then(() => {
      message.reply('successfully unbanned user.');
    }).catch(() => {
      message.reply('problem ocurred while unbanning user.');
    });
  },
};
