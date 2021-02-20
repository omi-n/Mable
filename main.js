const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

//	read the files where the commands are
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//	commands
client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	//	commands from commands folder are here
	switch(command) {
		//	tutorial commands
		case 'help':
		return client.commands.get('commands').commandsCommand(message);
		case 'prefix':
		return client.commands.get('prefix').prefixCommand(message);

		//	fun commands
		case 'pingspam':
		return client.commands.get('pingspam').pingspam(message, args);

		//	TODO: useful commands to do with web scraper/price database

		//	if they dont put a command
		default:
		return message.channel.send('You did not input a valid command!'),
		client.commands.get('commands').commandsCommand(message);
	}
});

//	online message
client.once('ready', () => {
	console.log('Online!');
});

client.login(token);
