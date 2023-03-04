// Require the necessary discord.js classes, possibly this would be required in the future: /* AuditLogEvent*/  at const on line 2
const { Client, Collection, Events, GatewayIntentBits, Partials } = require('discord.js');
const { token } = require('./tkn.json');
const config = require('./config.json');
//const { DELCHAN_ID } = require('./config.json');
const {REPCHAN_ID} = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
// const { exit } = require('node:process');
const { EmbedBuilder } = require('discord.js');
const { channel } = require('node:diagnostics_channel');

// initial message
console.log('yawn! am i alive?');

// instance creation
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages], partials: [Partials.Message, Partials.Channel, Partials.Reaction] });
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

//client ready block
client.once(Events.ClientReady, () => {
	const channelId = config.channel_id;
	const channel = client.channels.cache.get(channelId);
	try {
		//channel.send('beep!');
		channelle =+ channel;
		console.log(channelle)
		console.log('welcome should have been sent but this is disabled for production env.!');
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

client.on(Events.MessageCreate, async message => {
	// console.log('joined messageCreate at 68');
	if (message.author.id.toString() != '911444198329303070' && message.content.startsWith('!report'))		{
		const dmreq = message.content.slice(8);
		const usr = REPCHAN_ID;
		if (!message.inGuild()) {
			const answremb = new EmbedBuilder().setColor('#ff0000').setTitle('Hemos recibido tu reporte.').setDescription(`Reporte:\n ${dmreq}`);
			const channel = client.channels.cache.get(usr);
			const repEmbed = new EmbedBuilder().setColor('#ff0000').setTitle('Nuevo reporte.').setDescription(`He recibido un mensaje de ${message.author.tag}:\n ${dmreq}`);
			try {
				// console.log('embed created')
				try {
					console.log('joined embed send');
					channel.send({ embeds: [repEmbed] });
					/* try {
						message.delete();
					}
					catch (error) {
						console.log('error deleting message . . . ');
						return
					}*/
				}
				catch (error) {
					console.log('cant send embed. pls verify at 89 ', error);
				}
			}
			catch (error) {
				console.log('error: ', error);
			}
			try {
				
				try {
					message.author.send({ embeds: [answremb] });
				}
				catch (e) {
					message.author.send('Tu reporte ha sido enviado!');
					console.log('no se ha podido generar el embed de respuesta, error: ', e);
				}
			}
			catch (error) {
				console.log('error: cant send message. pls verify', error);
			}

		}
	}


});

/*
module disabled
client.on(Events.MessageDelete, async message => {
	// Ignore direct messages
	if (!message.guild) return;
	
		const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: AuditLogEvent.MessageDelete,
	});
	const channel = client.channels.cache.get(DELCHAN_ID);

	try {
		const logEmbed = new EmbedBuilder().setColor('#ff0000').setTitle('Message Deleted').setDescription(`un mensaje enviado por ${message.author.name} fue eliminado en ${message.channel}-${message.guild.name}.`).setTimestamp();
		channel.send({ embeds: [logEmbed] });
	}
	catch (error) {
		console.log(error);
	}


});*/

client.login(token);
