const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
let counter = 0;
const logger = require('../../InternalModules/logger')
const print = require('../../InternalModules/Pythonfy')
const directory = 'blush'
module.exports = {

	data: new SlashCommandBuilder()
		.setName('blush')
		.setDescription('Usa este comando para indicar que alguien te hizo sonrojar °//_//°')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('quien te hizo sonrojar?')
				.setRequired(true)),
	async execute(interaction) {
		try {
			const tgt = interaction.options.getUser('target');
			const guilty = interaction.user.username;
			const nekoanswer = await ((await nekoClient.fetch('blush', 1)).results[0]);
			const nekoUrl = nekoanswer.url;
			const nekoName = nekoanswer.anime_name;
			const logEmbed = new EmbedBuilder().setColor('#0000ff').setDescription(`${tgt} hizo sonrojar a **${guilty}**!`).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
			counter += 1;
			logger(`INFO: ${directory} command has been used ${counter} times since last reboot\nINFO: image: ${image}, name: ${choice}`, directory,'info')
			print(`${directory} command has been used ${counter} times since last reboot`);
			print(`image: ${image}, name: ${choice}`);
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			print('cant generate the neko... check logs to validate');
			logger(`ERROR: ${directory} command has failed. Error: ${error}`,`${directory}`,'FATAL');

		}
	},

};