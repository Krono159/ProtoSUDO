const { SlashCommandBuilder } = require ('discord.js');
const logger = require('../../InternalModules/logger')
const print = require('../../InternalModules/Pythonfy')
const directory = 'help'
module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Aqui puedes ver que hace cada comando'),
	async execute(interaction) {
		
		try {
			
			print(`empty command used`);
			await interaction.reply('command under construct :<\nhttps://http.cat/500\n\nHades v1.2.1.0. \n\n# Changelog:\nSe ha mejorado la funcion de registro y se ha hecho mas facil mantener un rastro de lo que causa los errores en el bot.');
		} catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			print('cant generate the neko... check logs to validate');
			logger(`ERROR: ${directory} command has failed. Error: ${error}`,`${directory}`,'FATAL');
		}
	},
};