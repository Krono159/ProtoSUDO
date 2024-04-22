const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
let counter = 0;
const logger = require('../../InternalModules/logger')
const print = require('../../InternalModules/Pythonfy')
const directory = 'cry'
module.exports = {
	data: new SlashCommandBuilder()
		.setName('cry')
		.setDescription('alguien te hizo llorar :c'),
	async execute(interaction) {
		try {
			const user = interaction.user.username;
			const nekoAnswer = await ((await nekoClient.fetch('cry', 1)).results[0]);
			const nekoUrl = nekoAnswer.url;
			const nekoName = nekoAnswer.anime_name;
			const logEmbed = new EmbedBuilder().setColor('#ff55AA').setDescription('**' + user + '** está llorando :c').setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });

			await interaction.reply({ embeds: [logEmbed] });
			counter += 1;
			logger(`INFO: ${directory} command has been used ${counter} times since last reboot\nINFO: image: ${nekoUrl}, name: ${nekoName}`, directory,'info')
			print(`${directory} command has been used ${counter} times since last reboot`);
			print(`image: ${nekoUrl}, name: ${nekoName}`);

		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			print('cant generate the neko... check logs to validate');
			logger(`ERROR: ${directory} command has failed. Error: ${error}`,`${directory}`,'FATAL');
		}
	},

};

