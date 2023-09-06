const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
const color = '#ffabcd';
const winston = require('winston');
let cudcounter = 0;
const logger = winston.createLogger({
	transports: [new winston.transports.Console()],
});
module.exports = {

	data: new SlashCommandBuilder()
		.setName('cuddle')
		.setDescription('acurrucate con alguien :3')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('con quien quieres acurrucarte? :>')
				.setRequired(true)),
	async execute(interaction) {
		try {
			const tgt = interaction.options.getUser('target');
			const guilty = interaction.user.username;
			const nekoanswer = await ((await nekoClient.fetch('cuddle', 1)).results[0]);
			const nekoUrl = nekoanswer.url;
			const nekoName = nekoanswer.anime_name;
			const logEmbed = new EmbedBuilder().setColor(color).setTitle('aww').setDescription(` **${guilty}** se acurruca con ${tgt}~`).setImage(nekoUrl).setFooter({ text: 'anime: '+nekoName});
			cudcounter += 1;
			logger.info( 'cuddle command has been used ' + cudcounter + ' times since last reboot');
			logger.info('image: ' + nekoUrl + ' name: ' + nekoName)
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			console.log('cant generate the neko... this is the error');
			console.log(error);
		}
	},

};