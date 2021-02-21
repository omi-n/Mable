module.exports = {
  name: 'help',
  help(message, Discord) {
		const helpEmbed = new Discord.MessageEmbed()
    .setColor('00FF00')
    .setTitle('Commands')
    .setDescription('List of Bot Commands.')
    .addFields(
      { name: '-!help', value: 'Brings up this message.' },
      { name: '-!avatar <@user>', value: 'Shows the avatar of the selected user.\nUse without <@user> for your own avatar.' },
      { name: '-!pingspam <#pings> <@users>', value: '(Requires admin) Spam pings a user.' },
      { name: '-!prefix', value: 'Shows the prefix of the bot (Useless).' },
      { name: '-!kick <@user>', value: '(Requires admin) Kicks a user.' },
      { name: '-!ban <@user>', value: '(Requires admin) Bans a user.' },
      { name: '-!unban <@userID>', value: '(Requires admin) Unbans a user.' },
    );

    message.channel.send(helpEmbed);
  },
};
