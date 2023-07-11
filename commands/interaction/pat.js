const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
const color = '#ffabcd';
let cudcounter = 0;
module.exports = {

	data: new SlashCommandBuilder()
		.setName('pat')
		.setDescription('dale palmaditas a alguien :3')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('a quien quieres darle palmaditas? :>')
				.setRequired(true)),
	async execute(interaction) {
		try {
			const tgt = interaction.options.getUser('target');
			const guilty = interaction.user.username;
			const nekoanswer = await ((await nekoClient.fetch('pat', 1)).results[0]);
			const nekoUrl = nekoanswer.url;
			const nekoName = nekoanswer.anime_name;
			const logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** acaricia la cabeza de ${tgt}~`).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName + ' | K159|MoccaDev' });
			cudcounter += 1;
			console.log('pat command has been used ' + cudcounter + ' times since last reboot');
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400.jpg');
			console.log('cant generate the neko... this is the error');
			console.log(error);
		}
	},

};
