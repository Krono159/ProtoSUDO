const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
const counter = 0;
const winston = require('winston');
const logger = winston.createLogger({
	transports: [new winston.transports.Console()],
});
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
			// console.log(nekoAnswer)
			const logEmbed = new EmbedBuilder().setColor('#ff55AA').setDescription('**' + user + '** está llorando :c').setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName});

			await interaction.reply({ embeds: [logEmbed] });
			counter += 1
			logger.info( 'cry command has been used ' + counter + ' times since last reboot');
			logger.info('image: ',nekoUrl,' name: ',nekoName)

		}
		catch (error) {
			await interaction.reply('cant finish the nekointeraction :<\nhttps://http.cat/400');
			console.log('cant generate the neko... this is the error:  \n\n');
			console.log(error);
			console.log('end of error log. pls continue.');
		}
	},

};

