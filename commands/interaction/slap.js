const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
const color = '#ffabcd';
let counter = 0;
module.exports = {

	data: new SlashCommandBuilder()
		.setName('slap')
		.setDescription('Dale una cachetada a alguien! (seguramente se lo merece...)')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('a quien quieres golpear? :>')
				.setRequired(true)),
	async execute(interaction) {
		try {
			const tgt = interaction.options.getUser('target');
			const guilty = interaction.user.username;
			const nekoanswer = await ((await nekoClient.fetch('slap', 1)).results[0]);
			const nekoUrl = nekoanswer.url;
			const nekoName = nekoanswer.anime_name;
			const logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** le dio una cachetada a ${tgt} D: `).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName + ' | K159|MoccaDev' });
			counter += 1;
			console.log('bonk command has been used ' + counter + ' times since last reboot');
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			console.log('cant generate the neko... this is the error');
			console.log(error);
		}
	},

};