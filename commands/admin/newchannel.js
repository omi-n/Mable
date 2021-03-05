module.exports = {
  name: 'newchannel',
  guildOnly: true,
  permissions: 'MANAGE_CHANNELS',
  execute(message, args) {
    //  args[0] is the name of the channel while args[1] is the categoryID
    const name = args[0];
    const categoryID = args[1];

    //  create the channel uncategorized if no categoryID
    if(!categoryID) {
      message.guild.channels
      .create(name, {
        type: 'text',
      })
      .then(() => {
        const channelName = message.guild.channels.cache
          .filter((channel) => {
            return channel.name === args[0];
          })
          .first();
        message.channel.send(`Channel ${channelName} created.`);
      });
      return;
    }
    else if(categoryID) {
      message.guild.channels
      .create(name, {
        type: 'text',
      })
      .then((channel) => {
        channel.setParent(categoryID);
      });
      message.channel.send(`Created channel ${name} in category ${categoryID}.`);
      return;
    }
    else {
      message.channel.send('Failed to create new channel!');
      return;
    }
  },
};
