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
			let lck = 0
			const user = interaction.user.username;
			let nekoanswer = await ((await nekoClient.fetch('wave', 1)).results[0]);
			let nekourl = nekoanswer.url;
			let nekoname = nekoanswer.anime_name;
			if (nekourl == 'https://nekos.best/api/v2/wave/d80ccbce-8b14-467e-8640-ce3cb674741e.gif') {
				nekoname = ' Nijiiro Days'
			}
			if (nekourl == 'https://nekos.best/api/v2/wave/e6f276a8-11f1-4ad0-b1e0-3fa91678e2f4.gif') {
				nekoname = 'Persona 4'
			}
			if(nekoname == '(???)'|| nekoname == 'Original (???)'|| nekoname == '???'){
				nekoname = 'No se encuentra nombre en API nekos.best, reportar a Krono159/Kaede159'
				lck = 1
			}
			let logEmbed = ''
			if (lck = 0) {
				logEmbed = new EmbedBuilder().setColor('#ff55AA').setDescription('**' + user + '** saluda a todos!').setImage(nekourl).setFooter({ text: 'anime: ' + nekoname });				
			} else {
				logEmbed = new EmbedBuilder().setColor('#ff55AA').setDescription('**' + user + '** saluda a todos!').setImage(nekourl).setFooter({ text: nekoname });
			}
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
