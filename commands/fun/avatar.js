module.exports = {
  name: 'avatar',
  aliases: ['av'],
  guildOnly: false,
  execute(message, Discord) {
        message.channel.send('debug');
            message.channel.send('debug');
                message.channel.send('debug');
    //  incase no user is mentioned
    const avatarEmbedSelf = new Discord.MessageEmbed()
    .setColor('2e45c7')
    .setTitle(`${message.author.username}'s avatar`)
    .setImage(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);
    if(!message.mentions.users.size) {
      return message.channel.send(avatarEmbedSelf);
    }

    //  normal usage
    var user = message.mentions.users.first();
    const avatarEmbed = new Discord.MessageEmbed()
    .setColor('2e45c7')
    .setTitle(`${user.username}'s avatar`)
    .setImage(`${user.displayAvatarURL({ format: "png", dynamic: true })}`);
    message.channel.send(avatarEmbed);
  },
};
