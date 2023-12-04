// Require the necessary discord.js classes, possibly this would be required in the future: /* AuditLogEvent*/  at const on line 2
const fs = require('fs');
const path = require('path');
const { Client, Collection, Events, GatewayIntentBits } = require ('discord.js');
// const winexpress = require('express-winston');
const { REPCHAN_ID } = require('./config.json');
// initial message
const chalk = require('chalk');
const { token } = require('./tkn.json');
const winston = require('winston');
const logger = winston.createLogger({
	transports: [
		new winston.transports.Console(),
	],
});
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		}
		else {
			logger.warning(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

client.once(Events.ClientReady, () => {
	console.log(chalk.blue((`Ready! logged in as ${client.user.tag}`)));
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
			const errorembed = {
				title: 'error',
				description: 'interaction deferred',
				image: {
					url: 'https://http.cat/417',
				},
				footer: {
					text: 'proto on dev stage',
				},
			};
			await interaction.reply({ embeds: [errorembed], ephemeral:false });
			logger.warn('interaction deferred');
		}
		else {
			const errorembed = {
				title: 'error',
				description: 'error on execution\ncontact devs',
				image: {
					url: 'https://http.cat/417',
				},
				footer: {
					text: 'proto on dev stage',
				},
			};
			await interaction.reply({ embeds: [errorembed], ephemeral:false });
			logger.warn('error on command execution');
		}
	}
});
client.on(Events.MessageCreate, async message => {
	if (message.author.id.toString() != '911444198329303070' && message.content.startsWith('!report')) {
		const dmreq = message.content.slice(8);
		const reportchannel = REPCHAN_ID;
		if (!message.inGuild()) {
			const answremb = {
				color: '#0000ff',
				title: 'Hemos recibido tu reporte',
				description: `Reporte:\n ${dmreq}\n\nPronto un administrador revisara el caso, y de ser necesario se pondrá en contacto contigo`,
				footer: {
					text: 'Gracias por confiar en protoSUDO!',
				},
			};
			const chan = client.channels.cache.get(reportchannel);
			const repEmbed = {
				color: '#ff0000',
				title: 'Nuevo reporte',
				description: `He recibido un mensaje de ${message.author.tag}:\n ${dmreq}`,
				footer:  'protoSUDO v0.0.4C',
			};

			try {
				chan.send({ content: '<@&559478924090933292> <@&559888553971286027> <@&574479958278406166>', embeds: [repEmbed] });
			}
			catch (error) {
				logger.error('error: ', error);
			}
			try {
				message.author.send({ embeds: [answremb] });
			}
			catch (error) {
				message.author.send('Tu reporte ha sido enviado!');
				logger.error('no se ha podido generar el embed de respuesta, error: ', error);
			}
		}
	}
	else {
		return;
	}
});

client.login(token);