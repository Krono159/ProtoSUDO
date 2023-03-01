// Require the necessary discord.js classes
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const config = require('./config.json');

const fs = require('node:fs');
const path = require('node:path');
const { exit } = require('node:process');

console.log('Boop! i just woke up and my token is none of your business, you dumb dork!')



// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
try {
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		client.commands.set(command.data.name, command);	
		console.log('Command ', file, ' was loaded successfully');
	}
} catch (error) {
	console.log('please check for on line 20.')
}



client.once(Events.ClientReady, () => {
	const channelId = config.channel_id;
	const channel = client.channels.cache.get(channelId);
	try {
		channel.send('Hello there, capitan <@610937299903184898>!  I am online!');
		console.log('welcome message sent!')
	} catch (error) {
		console.log('unable to send online message, but bot is alive. pls check index.js client ready block. error: ',error)
	}
	console.log('Ready!');
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});
client.login(token);
