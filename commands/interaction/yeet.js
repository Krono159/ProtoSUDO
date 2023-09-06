const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
const winston = require('winston');
const color = '#ffabcd';
let counter = 0;
const logger = winston.createLogger({
	transports: [new winston.transports.Console()],
});
module.exports = {

	data: new SlashCommandBuilder()
		.setName('yeet')
		.setDescription('Lanza a alguien alv!')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('a quien quieres lanzar?')
				.setRequired(true)),
	async execute(interaction) {
		try {
			const tgt = interaction.options.getUser('target');
			const guilty = interaction.user.username;
			const nekoanswer = await ((await nekoClient.fetch('yeet', 1)).results[0]);
			const nekoUrl = nekoanswer.url;
			const nekoName = nekoanswer.anime_name;
			const logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** lanzó a ${tgt} alv!`).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
			counter += 1;
			logger.info( 'blush command has been used ' + counter + ' times since last reboot');
			logger.info('image: ',nekoUrl,' name: ',nekoName)
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			console.log('cant generate the neko... this is the error');
			console.log(error);
		}
	},

};