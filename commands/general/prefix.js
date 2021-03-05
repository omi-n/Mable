module.exports = {
  name: 'prefix',
  guildOnly: false,
  execute(message, prefix) {
    message.channel.send(`The prefix for this bot is ${prefix}.`);
  },
};
