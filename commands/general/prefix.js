module.exports = {
  name: 'prefix',
  guildOnly: false,
  prefixCommand(message, prefix) {
    message.channel.send(`The prefix for this bot is ${prefix}.`);
  },
};
