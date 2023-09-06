const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
const color = '#ffabcd';
let counter = 0;
const winston = require('winston');
const logger = winston.createLogger({
	transports: [new winston.transports.Console()],
});
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
			logger.info('dance command has been used ' + counter + ' times since last reboot');
			logger.info('image: ' + nekoUrl + ' name: ' + nekoName);
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			console.log('cant generate the neko... this is the error');
			console.log(error);
		}
	},

};