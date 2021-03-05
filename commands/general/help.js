module.exports = {
  name: 'help',
  aliases: ['h'],
  guildOnly: false,
  execute(message, Discord, prefix) {
		const helpEmbed = new Discord.MessageEmbed()
    .setColor('00FF00')
    .setTitle('Commands')
    .setDescription('List of Bot Commands.')
    .addFields(
      { name: `${prefix}help`, value: 'Brings up this message.' },
      { name: `${prefix}avatar <@user>`, value: 'Shows the avatar of the selected user.\nUse without <@user> for your own avatar.' },
      { name: `${prefix}prefix`, value: 'Shows the prefix of the bot (Useless).' },
      { name: `${prefix}pingspam <#pings> <@users>`, value: '(Requires admin) Spam pings a user.' },
      { name: `${prefix}kick <@user>`, value: '(Requires admin) Kicks a user.' },
      { name: `${prefix}ban <@user>`, value: '(Requires admin) Bans a user.' },
      { name: `${prefix}unban <@userID>`, value: '(Requires admin) Unbans a user.' },
      { name: `${prefix}newchannel <new channel name> <optional: channel section>`, value: '(Requires admin) Creates a new channel.' },
      { name: `${prefix}delchannel <target channel name>`, value: '(Requires admin) Deletes a channel.' },
    );

    message.channel.send(helpEmbed);
  },
};
