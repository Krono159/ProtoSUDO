const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
let counter = 0;
const logger = require('../../InternalModules/logger');
const print = require('../../InternalModules/Pythonfy');
const directory = 'hihi';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('holi')
		.setDescription('Saluda a todos!'),
	async execute(interaction) {

		try {
			let lck = 0;
			const user = interaction.user.username;
			const nekoanswer = await ((await nekoClient.fetch('wave', 1)).results[0]);
			const nekoUrl = nekoanswer.url;
			let nekoName = nekoanswer.anime_name;
			if (nekoName == '(???)' || nekoName == 'Original (???)' || nekoName == '???') {
				nekoName = 'No se encuentra nombre en API nekos.best, reportar a Krono159/Kaede159';
				lck = 1;
			}
			let logEmbed = '';
			if (lck = 0) {
				logEmbed = new EmbedBuilder().setColor('#ff55AA').setDescription('**' + user + '** saluda a todos!').setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
			}
			else {
				logEmbed = new EmbedBuilder().setColor('#ff55AA').setDescription('**' + user + '** saluda a todos!').setImage(nekoUrl).setFooter({ text: nekoName });
			}
			counter += 1;
			logger(`INFO: ${directory} command has been used ${counter} times since last reboot\nINFO: image: ${nekoUrl}, name: ${nekoName}`, directory, 'info');
			print(`${directory} command has been used ${counter} times since last reboot`);
			print(`image: ${nekoUrl}, name: ${nekoName}`);
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			print('cant generate the neko... check logs to validate');
			logger(`ERROR: ${directory} command has failed. Error: ${error}`, `${directory}`, 'FATAL');
		}
	},

};
