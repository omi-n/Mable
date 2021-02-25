module.exports = {
  name: 'prefix',
  guildOnly: false,
  prefix(message) {
    message.channel.send('The prefix for this bot is -!.');
  },
};
