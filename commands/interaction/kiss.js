const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
const color = '#ffabcd';
let counter = 0;
const logger = require('../../InternalModules/logger');
const print = require('../../InternalModules/Pythonfy');
const directory = 'kiss';


module.exports = {

	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('Usa este comando para besar a alguien :3')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('a quien quieres besar? °3°')
				.setRequired(true)),
	async execute(interaction) {
		try {
			const tgt = interaction.options.getUser('target');
			const guilty = interaction.user.username;
			if (tgt.id !== interaction.user.id) {
				const nekoanswer = await ((await nekoClient.fetch('kiss', 1)).results[0]);
				const nekoUrl = nekoanswer.url;
				const nekoName = nekoanswer.anime_name;
				const logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** besó a **${tgt.username}** !`).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
				await interaction.reply({ embeds: [logEmbed] });
				logger(`INFO: ${directory} command has been used ${counter} times since last reboot\nINFO: image: ${nekoUrl}, name: ${nekoName}`, directory, 'info');
				print(`${directory} command has been used ${counter} times since last reboot`);
				print(`image: ${nekoUrl}, name: ${nekoName}`);
				return;
			}
			else {
				const nekoanswer = await ((await nekoClient.fetch('kiss', 1)).results[0]);
				const nekoUrl = nekoanswer.url;
				const nekoName = nekoanswer.anime_name;
				const logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** se besó a si mism@! como es eso posible?`).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
				await interaction.reply({ embeds: [logEmbed] });
				counter += 1;
				logger(`INFO: ${directory} command has been used ${counter} times since last reboot\nINFO: image: ${nekoUrl}, name: ${nekoName}`, directory, 'info');
				print(`slap command has been used ${counter} times since last reboot`);
				print(`image: ${nekoUrl}, name: ${nekoName}`);
				return;
			}


		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			print('cant generate the neko... check logs to validate');
			logger(`ERROR: ${directory} command has failed. Error: ${error}`, `${directory}`, 'FATAL');
		}
	},

};

