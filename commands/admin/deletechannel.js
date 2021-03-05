module.exports = {
  name: 'delchannel',
  guildOnly: true,
  permissions: 'MANAGE_CHANNELS',
  execute(message, args) {
    //  fetch channels
    const channel = message.guild.channels.cache
      .filter((channel) => {
        return channel.name === args[0];
      })
      .first();

      if(channel) {
        channel.delete();
        message.channel.send(`Deleted channel ${channel.name}.`);
      }
      else {
        message.channel.send('Error encountered while deleting channel. Maybe you misspelled something?');
      }
  },
};
