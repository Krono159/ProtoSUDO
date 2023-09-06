const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
const winston = require('winston');
let counter = 0;
const logger = winston.createLogger({
	transports: [new winston.transports.Console()],
});
module.exports = {
	data: new SlashCommandBuilder()
		.setName('holi')
		.setDescription('Saluda a todos!'),
	async execute(interaction) {
		try {
			const user = interaction.user.username;
			const nekoanswer = await ((await nekoClient.fetch('wave', 1)).results[0]);
			const nekourl = nekoanswer.url;
			const nekoname = nekoanswer.anime_name;
			const logEmbed = new EmbedBuilder().setColor('#ff55AA').setDescription('**' + user + '** saluda a todos!').setImage(nekourl).setFooter({ text: 'anime: ' + nekoname });
			counter += 1;
			logger.info('hihi command has been used ' + counter + ' times since last reboot');
			logger.info('image: ' + nekourl + ' name: ' + nekoname);
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			console.log('cant generate the neko... this is the error');
			console.log(error);
		}
	},

};
