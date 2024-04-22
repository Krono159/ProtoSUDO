const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
const color = '#ffabcd';
let counter = 0;
const logger = require('../../InternalModules/logger')
const print = require('../../InternalModules/Pythonfy')
const directory = 'dance'

module.exports = {

	data: new SlashCommandBuilder()
		.setName('dance')
		.setDescription('ven y baila! la vida lo merece :3'),
	async execute(interaction) {
		try {
			const guilty = interaction.user.username;
			const nekoanswer = await ((await nekoClient.fetch('dance', 1)).results[0]);
			const nekoUrl = nekoanswer.url;
			const nekoName = nekoanswer.anime_name;
			const logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** sacó los pasos prohibidos!`).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
			counter += 1;
			logger(`INFO: ${directory} command has been used ${counter} times since last reboot\nINFO: image: ${nekoUrl}, name: ${nekoName}`, directory,'info')
			print(`${directory} command has been used ${counter} times since last reboot`);
			print(`image: ${nekoUrl}, name: ${nekoName}`);
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			print('cant generate the neko... check logs to validate');
			logger(`ERROR: ${directory} command has failed. Error: ${error}`,`${directory}`,'FATAL');
		}
	},

};