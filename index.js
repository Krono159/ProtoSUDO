// Require the necessary discord.js classes, possibly this would be required in the future: /* AuditLogEvent*/  at const on line 2
let modulcount = 0
const { Client, Collection, Events, GatewayIntentBits, Partials, ActivityType, fetchRandom } = require ('discord.js');
const { token } = require('./tkn.json');
const { Client: NbClient } = require('nekos-best.js');

const neko = require('nekos-best.js');
try{console.log('Ignore pls, neko loading...' + neko);console.log('neko module has been loaded!')}catch(error){console.log('neko module has not been loaded, error: ',error)}

// const config = require('./config.json');
// const { DELCHAN_ID } = require('./config.json');
const { REPCHAN_ID } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
// const { exit } = require('node:process');
const { EmbedBuilder } = require('discord.js');
const { type } = require('node:os');
console.log('ignore pls. type handling.'+type);
// const { channel } = require('node:diagnostics_channel');


// initial message
console.log('yawn! am i alive?');

// instance creation
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages], partials: [Partials.Message, Partials.Channel, Partials.Reaction] });
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
//command loader
try {
	// command update & exec module
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		client.commands.set(command.data.name, command);
		modulcount = modulcount + 1;
		console.log('Command #'+ modulcount + ': '+ file + ' has been loaded successfully');
	}
	
}
//command loader error handler
catch (error) {
	console.log('pls check command update & exec module');
}

// client ready block
client.once(Events.ClientReady, () => {
console.log('\n\n\n'+modulcount + ' modules has been loaded\n\n\n\n')
	const nekoClient = new NbClient();
	try{console.log(nekoClient);console.log('neko module has been loaded!')}catch(error){console.log('neko module has not been loaded, error: ',error)}
	client.user.setStatus('available');
	client.user.setActivity('Vigilando la legion del ganso :3', { type: 'WATCHING' });
	client.user.setPresence({
		activities: [{ name: 'como te va a banear un furro', type: ActivityType.Watching }],
		status: 'available',
	});
	try {
		console.log('Bot is running on prod. enviroment.');
	}
	catch (error) {
		console.log('unable to send online message, but bot is alive (still running on localhost). pls check index.js client ready block. error: ', error);
	}
	console.log('yes i fucking am! protoSUDO V1.0.1mu1 has been loaded with '+ modulcount+ ' modules!');
});
//command execution
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
			await interaction.followUp({ content: 'Hubo un error ejecutando este comando!',ephemeral:true});
		}
		else {
			await interaction.reply({ content: 'Hubo un error ejecutando este comando!',ephemeral:true});
		}
	}
});
//report handling
client.on(Events.MessageCreate, async message => {
	// console.log('joined messageCreate at 68');
	if (message.author.id.toString() != '911444198329303070' && message.content.startsWith('!report')) {
		const dmreq = message.content.slice(8);
		const reportchannel = REPCHAN_ID;
		if (!message.inGuild()) {
			const answremb = new EmbedBuilder().setColor('#0000FF').setTitle('Hemos recibido tu reporte.').setDescription(`Reporte:\n ${dmreq}\n\nPronto un administrador revisara el caso, y de ser necesario se pondrá en contacto contigo`).setFooter({ text: 'Gracias por confiar en ProtoSUDO!' });
			const chan = client.channels.cache.get(reportchannel);
			const repEmbed = new EmbedBuilder().setColor('#ff0000').setTitle('Nuevo reporte.').setDescription(`He recibido un mensaje de ${message.author.tag}:\n ${dmreq}`).setFooter({ text: 'protoSUDO v0.0.4C' });
			try {
				try {
					chan.send({ content: '<@&559478924090933292> <@&559888553971286027> <@&574479958278406166>', embeds: [repEmbed] });
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
	else{
		return
	}
});
//client login confirmation 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.login(token);
