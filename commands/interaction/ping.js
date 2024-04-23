const { SlashCommandBuilder } = require('discord.js');
const ping = require('../../InternalModules/ping');
const logger = require('../../InternalModules/logger');
const print = require('../../InternalModules/Pythonfy');
const directory = 'ping';
const targetAdress = 'www.google.com';
module.exports = {

	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('test the bot latency'),

	async execute(interaction) {
		await interaction.reply('testing latency');


		ping(targetAdress, (error, latency) => {
			if (error) {
				logger(`ERROR: Ping has failed. module: ${directory};;; target: ${targetAdress};;; error: ${error}`, directory, 'FATAL');
				print('Error:', error);
				interaction.followUp(`ping test failed. error: ${error}`);
			}
			else {
				logger(`tested ping: results: ${latency}`, directory, 'info');
				print('Latencia:', latency, 'ms');
				interaction.followUp(`ping test completed! latency: ${latency}ms`);
			}
		});


	},

};