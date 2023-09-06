const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
const color = '#ffabcd';
const winston = require('winston');
let borcounter = 0;
const logger = winston.createLogger({
	transports: [new winston.transports.Console()],
});
module.exports = {

	data: new SlashCommandBuilder()
		.setName('aburrido')
		.setDescription('Usa este comando para indicar que estas aburrido...'),
	async execute(interaction) {
		try {
			const guilty = interaction.user.username;
			const nekoanswer = await ((await nekoClient.fetch('bored', 1)).results[0]);
			const nekoUrl = nekoanswer.url;
			const nekoName = nekoanswer.anime_name;
			const logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** está aburrido...`).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
			borcounter += 1;
			logger.info('blush command has been used ' + borcounter + ' times since last reboot');
			logger.info('image: ' + nekoUrl + ' name: ' + nekoName);
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			logger.error('cant generate the neko... this is the error: ' + error);

		}
	},

};