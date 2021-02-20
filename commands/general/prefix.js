module.exports = {
  name: 'prefix',
  prefix(message) {
    message.channel.send('The prefix for this bot is -!.');
  },
};
