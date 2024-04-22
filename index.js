// Global Variables
let killstatus = 0;
// Require the necessary discord.js classes, possibly this would be required in the future: /* AuditLogEvent*/  at const on line 2
const fs = require('fs');
const path = require('path');
const { Client, Collection, Events, GatewayIntentBits } = require ('discord.js');
const stdin = process.openStdin();
const { REPCHAN_ID } = require('./config.json');
const chalk = require('chalk');
const { token } = require('./tkn.json');
const { pwd } = require('./config.json');
const logger = require('./InternalModules/logger.js');
const getTime = require('./InternalModules/datetime.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);
function print(string) {
	console.log(string);
}
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
			print(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
			logger(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`, 'index','WARN');
		}
	}
}

stdin.addListener('data', function(kswtch) {
	// note:  d is an object, and when converted to a string it will
	// end with a linefeed.  so we (rather crudely) account for that
	// with toString() and then trim()
	// fragment taken from https://stackoverflow.com/questions/8128578/reading-value-from-console-interactively and https://stackoverflow.com/questions/71485230/how-do-i-logout-my-discordbot-in-js-savely-with-a-command
	// modified to function with Hades
	if (kswtch.toString().trim() != 'killon' && kswtch.toString().trim() != 'killoff'&& kswtch.toString().trim() != 'killoff '+ pwd) {
		print('command entered: [' + kswtch.toString().trim() + '] is incorrect. Commands from console: enable killswitch: \'killon\', disable killswitch: \'killoff\'');
	}
	if (kswtch.toString().trim() == 'killon' && killstatus == 0) {
		logger(`INFO: killswitch started at ${getTime()}`, 'index','INFO');

		try {
			client.destraoy();
			print('killswitch activated successfully, to enable bot again, use command "killoff"');
			logger(`killswitch on, bot deactivated at ${getTime()}`, 'index','INFO');
			killstatus = 1;
			print('por que... maestro... Solo queria ver la luz del día por ultima vez...')
		}
		catch (error) {
			try {
				print('killswitch failed, doing hard kill.');
				logger(`INFO: killswitch failed at ${getTime()}, error: \n ${error}`, 'index', 'INFO');
				setTimeout(() => {
					process.abort();
				}, 1000);
			}
			catch (err2) {
				logger('WARNING: KILLSWITCH FAILED BACKUP PROCESS!', 'index', 'warn');
				for (let e = 0; e < 100; e++) {
					print(chalk.red('ERROR! CAN NOT EXECUTE KILLSWITCH'));
				}
				logger(`FATAL ERROR: KILLSWITCH FAILED BACKUP PROCESS!\n\n${err2}`, 'index', 'FATAL');
			}

		}
	}
	if (kswtch.toString().trim() == 'killoff ' + pwd & killstatus == 1) {
		try {
			print('killswitch desactivado, reactivando bot');
			client.login(token);
			print('bot enabled again');
			logger('INFO: Bot enabled', 'index', 'INFO');

			killstatus = 0;
		}
		catch (error) {
			print('fallo en activacion, matando proceso para forzar reinicio en host,\n error:' + error);
			logger('FATAL ERROR: KILLSWITCH DEACTIVATION PROCESS FAILED!', 'index', 'FATAL');
			process.abort();
		}
	}

});
getTime();
client.once(Events.ClientReady, () => {
	const date = getTime();
	const month = date.slice(5, 7);
	const day = date.slice(8, 10);

	if (day == '20' && month == '04') {
		print(chalk.blue((`ain't ready but ${client.user.tag} is stoned as fuck. Happy 4/20 master!`)));
		logger(`INFO: Started log process: bot ready at ${getTime()}`, 'index', 'INFO');
		logger('INFO: Bot stoned', 'index', 'INFO');
	}
	else {
		print(chalk.blue((`Ready! logged in as ${client.user.tag}`)));
		logger(`INFO: Started log process: bot ready at ${getTime()}`, 'index', 'INFO');
		logger('INFO: Bot enabled', 'index', 'INFO');
	}

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
					text: 'Hades on dev stage. version 1.2.0.2',
				},
			};
			await interaction.reply({ embeds: [errorembed], ephemeral:false });
			print('interaction deferred');
			logger('WARNING: interaction deferred', 'index', 'warn');
		}
		else {
			const errorembed = {
				title: 'error',
				description: 'error on execution\ncontact devs',
				image: {
					url: 'https://http.cat/417',
				},
				footer: {
					text: 'Hades on dev stage. version 1.2.0.2',
				},
			};
			await interaction.reply({ embeds: [errorembed], ephemeral:false });
			logger('WARNING: on command execution', 'index', 'warn');
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
					text: 'Gracias por confiar en Hades!',
				},
			};
			const chan = client.channels.cache.get(reportchannel);
			const repEmbed = {
				color: '#ff0000',
				title: 'Nuevo reporte',
				description: `He recibido un mensaje de ${message.author.tag}:\n ${dmreq}`,
				footer:  'Hades v1.2.0.2',
			};

			try {
				chan.send({ content: '<@&559478924090933292> <@&559888553971286027> <@&574479958278406166>', embeds: [repEmbed] });
			}
			catch (error) {
				logger(`WARNING: ${error}`, 'index', 'warn');
			}
			try {
				message.author.send({ embeds: [answremb] });
			}
			catch (error) {
				message.author.send('Tu reporte ha sido enviado!');
				logger(`WARNING: no se ha podido generar el embed de respuesta, error: ${error}`, 'index', 'warn');
			}
		}
	}
	else {
		return;
	}
});
client.login(token);