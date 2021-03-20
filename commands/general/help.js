module.exports = {
  name: 'help',
  aliases: ['h'],
  guildOnly: false,
  execute(message, Discord, prefix) {
		const helpEmbed = new Discord.MessageEmbed()
    .setColor('00FF00')
    .setTitle('Commands')
    .setDescription(`List of Bot Commands. (PREFIX: ${prefix})`)
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
      { name: `${prefix}price <name>`, value: 'Fetches the price and details of an item.' },
      { name: `${prefix}addp <itemName> <itemLink> <itemXPath(price)>`, value: 'Adds item to scraper database. If no item xpath, default to Amazon.' },
      { name: `${prefix}calc`, value:'Shows a bunch of useful calculators.'}
    );

    message.channel.send(helpEmbed);
  },
};
