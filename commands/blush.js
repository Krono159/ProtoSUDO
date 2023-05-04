const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
let color = '#ffabcd';
let counter = 0;
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
			let tgt = interaction.options.getUser('target');
			let guilty = interaction.user.username;
			let nekoanswer = await ((await nekoClient.fetch('blush', 1)).results[0]);
			let nekoUrl = nekoanswer.url;
			let nekoName = nekoanswer.anime_name
			let logEmbed = new EmbedBuilder().setColor(color).setDescription(`${tgt} hizo sonrojar a **${guilty}**!`).setImage(nekoUrl).setFooter({text: 'Anime: '+nekoName});
			counter += 1;
			console.log('blush command has been used ' + counter + ' times since last reboot');
			await interaction.reply({  embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			console.log('cant generate the neko... this is the error');
			console.log(error);
		}
	},

}; 