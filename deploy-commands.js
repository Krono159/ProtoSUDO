const { REST, Routes } = require('discord.js');
const { clientId } = require('./config.json');
/* , guildId*/
const { token } = require('./tkn.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	console.log(`file ${file} contains a module. loading...`)
	commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(token);


// and deploy your commands!
(async () => {
	try {
		console.log(`se inició la carga de ${commands.length}  comandos! (slash commands).`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);
		console.log(`Se han cargado satisfactoriamente ${data.length} comandos... por favor ejecutar index.js para iniciar el bot.`);
	}
	catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
