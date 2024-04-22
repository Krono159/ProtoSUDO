const { SlashCommandBuilder } = require('discord.js');
const logger = require('../../InternalModules/logger')
const print = require('../../InternalModules/Pythonfy')
const directory = 'ban'
const counter = 0
module.exports = {

	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('banea a alguien (ahora disponible para todos!)')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for banning')),

	async execute(interaction) {
		const guilty = interaction.member.displayName;
		try {
			await interaction.reply('https://http.cat/403.png');
			logger(`INFO: ${directory} command has been used ${counter} times since last reboot\nINFO: image: https://http.cat/403.png , dum dum: ${guilty}`, directory,'info')
			print(`${directory} command has been used ${counter} times since last reboot`);
		} catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			print('cant generate the neko... check logs to validate');
			logger(`ERROR: ${directory} command has failed. Error: ${error}`,`${directory}`,'FATAL');
		}

	},
};
