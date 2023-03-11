const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
let image = '';
let text = '';
let color = '#ffffff';
module.exports = {

	data: new SlashCommandBuilder()
		.setName('bonk')
		.setDescription('no horny en este servidor cristiano')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('a quien vas a golpear?')),
	async execute(interaction) {
		const choice = Math.floor(Math.random() * 3) + 1;
		const tgt = interaction.options.getUser('target');
		const guilty = interaction.user.id;
		switch (choice) {
		case 1:
			image = 'https://media.discordapp.net/attachments/1083903422476079246/1083903785228845147/bonk-mega-bonk.gif';
			text = 'Megabonk!';
			color = '#000000';
			break;

		case 2:
			image = 'https://media.discordapp.net/attachments/1083903422476079246/1083903591078699149/bonk2.gif';
			text = 'Bonk!';
			color = '#FF000';
			break;

		case 3:
			image = 'https://media.discordapp.net/attachments/1083903422476079246/1083903581578608710/bonk.gif';
			color = '#FFABCD';
			text = 'Bonk! no horny!';
			break;

		default:
			break;
		}
		const logEmbed = new EmbedBuilder().setColor(color).setTitle('**' + text + '**').setImage(image);
		await interaction.reply({ content: `<@${guilty}> golpeó a ${tgt}`, embeds: [logEmbed] });
	},

};