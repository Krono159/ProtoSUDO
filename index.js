// Require the necessary discord.js classes, possibly this would be required in the future: /* AuditLogEvent*/  at const on line 2
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const config = require('./config.json');
const { DELCHAN_ID } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
// const { exit } = require('node:process');
const { EmbedBuilder } = require('discord.js');

// initial message
console.log('yawn! am i alive?');

// instance creation
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
try {
	// command update & exec module
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		client.commands.set(command.data.name, command);
		console.log('Command ', file, ' was loaded successfully');
	}
}
catch (error) {
	console.log('pls check command update & exec module');
}


client.once(Events.ClientReady, () => {
	const channelId = config.channel_id;
	const channel = client.channels.cache.get(channelId);
	try {
		channel.send('beep!');
		console.log('welcome message sent!');
	}
	catch (error) {
		console.log('unable to send online message, but bot is alive. pls check index.js client ready block. error: ', error);
	}
	console.log('yes i fucking am!');
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'Hubo un error ejecutando este comando!', ephemeral: true });
		}
		else {
			await interaction.reply({ content: 'Hubo un error ejecutando este comando!', ephemeral: true });
		}
	}
});


client.on(Events.MessageDelete, async message => {
	// Ignore direct messages
	if (!message.guild) return;
	/*  cont that might be used in future
		const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: AuditLogEvent.MessageDelete,
	});*/
	const channel = client.channels.cache.get(DELCHAN_ID);

	try {
		const logEmbed = new EmbedBuilder().setColor('#ff0000').setTitle('Message Deleted').setDescription(`un mensaje enviado por ${message.author.name} fue eliminado en ${message.channel}-${message.guild.name}.`).setTimestamp();
		channel.send({ embeds: [logEmbed] });
	}
	catch (error) {
		console.log(error);
	}


});

client.login(token);
