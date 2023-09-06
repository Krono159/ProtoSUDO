const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
let counter = 0;
const winston = require('winston');
const logger = winston.createLogger({
	transports: [new winston.transports.Console()],
});
module.exports = {
	data: new SlashCommandBuilder()
		.setName('neko')
		.setDescription('Traigan a las chicas gato! este comando genera una imagen random de una chica gato'),
	async execute(interaction) {
		try {
			const user = interaction.user.username;
			const nekoanswer = await ((await nekoClient.fetch('neko', 1)).results[0]);
			const nekourl = nekoanswer.url;
			const nekoname = nekoanswer.artist_name;
			const logEmbed = new EmbedBuilder().setColor('#ff55AA').setDescription('**' + user + '** invocó una neko-girl!').setImage(nekourl).setFooter({ text: 'artista: ' + nekoname });
			// console.log(nekoanswer)
			counter += 1;
			logger.info('neko command has been used ' + counter + ' times since last reboot');
			logger.info('image: ' + nekourl + ' name: ' + nekoname);
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			console.log('cant finish the nekotest :<');
			console.log('cant generate the neko... this is the error:  \n\n');
			console.log(error);
			console.log('end of error log. pls continue.');
		}
	},

};