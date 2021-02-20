module.exports = {
  name: 'avatar',
  aliases: ['av'],
  avatar(message) {
    if(!message.mentions.users.size) {
      message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
    }
    else {
      const point = message.mentions.users.map(user => {
        return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
      });
      message.channel.send(point);
    }
  },
};
