const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

//	read the files where the commands are
const commandFolders = fs.readdirSync('./commands');
for(const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
		for(const file of commandFiles) {
			const command = require(`./commands/${folder}/${file}`);
			client.commands.set(command.name, command);
		}
}

//	commands
client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	//	if they literally put in nothing
	if(!commandName) {
		return message.reply('You did not input a valid command! Try \'-!help\' to see avalible commands.');
	}

	//	disallow certain commands from being used in DM
	if(command.guildOnly && message.channel.type === 'dm') {
		return message.reply('Can\'t use that in DM!');
	}

	//	command permissions
	if(command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if(!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('You do not have the permissions to use that command.');
		}
	}

	//	all commands are here
	switch(commandName) {
		//	tutorial commands
		case 'help':
		return command.help(message, Discord);
		case 'prefix':
		return command.prefixCommand(message);

		//	fun commands
		case 'pingspam':
		return command.pingspam(message, args);
		case 'avatar':
		return command.avatar(message);

		//	useful commands to do with admin operations
		case 'kick':
		return command.kickUser(message, args);
		case 'ban':
		return command.banUser(message, args);
		case 'unban':
		return command.unbanUser(message, args);

		// music bot TODO

		//	if they dont put a command
		case undefined:
		return message.reply('You did not input a valid command! Try \'-!help\' to see avalible commands.');
		default:
		return message.channel.send('You did not input a valid command! Try \'-!help\' to see avalible commands.');
	}
});

//	online message
client.once('ready', () => {
	console.log('Online!');
});

client.login(token);
