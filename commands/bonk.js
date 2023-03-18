const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
let image = '';
let text = '';
let counter = 0;
let color = '#ffffff';
let cont = '';
module.exports = {

	data: new SlashCommandBuilder()
		.setName('bonk')
		.setDescription('no horny en este servidor cristiano')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true)),
	async execute(interaction) {
		try {
			const choice = Math.floor(Math.random() * 3) + 1;
			const tgt = interaction.options.getUser('target');
			const guilty = interaction.user.id;
			cont = `<@${guilty}> golpeó a ${tgt}`;
			switch (choice) {
			case 1:
				image = 'https://media.discordapp.net/attachments/1083903422476079246/1083903785228845147/bonk-mega-bonk.gif';
				text = 'Megabonk!';

				color = '#000000';
				break;

			case 2:
				image = 'https://media.discordapp.net/attachments/1083903422476079246/1083903591078699149/bonk2.gif';
				text = 'Bonk!';
				color = '#FF0000';
				break;

			case 3:
				image = 'https://media.discordapp.net/attachments/1083903422476079246/1083903581578608710/bonk.gif';
				color = '#FFABCD';
				text = 'Bonk! no horny!';
				break;

			default:
				console.log('error selecting image, for some reason case/switch got overflowed. using default case');
				image = 'https://media.discordapp.net/attachments/1083903422476079246/1083903591078699149/bonk2.gif';
				text = 'Bonk!';
				color = '#FF0000';
				break;
			}
			const logEmbed = new EmbedBuilder().setColor(color).setTitle('**' + text + '**').setImage(image);
			await interaction.reply({ content: cont, embeds: [logEmbed] });
			counter += 1;
			console.log('bonk command has been used ' + counter + ' times since last reboot');
		}
		catch (error) {
			console.log('error generating image. app did not respond.\n' + error);
		}
	},

};