const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
let image = '';

module.exports = {

	data: new SlashCommandBuilder()
		.setName('burunyuuu')
		.setDescription('lets summon neco arc'),
	async execute(interaction) {
		const choice = Math.floor(Math.random() * 3) + 1;
		switch (choice) {
		case 1:
			image = 'https://media.discordapp.net/attachments/574483864123211791/1080687680637120533/latest.png?width=379&height=676';
			console.log(choice);
			break;

		case 2:
			image = 'https://media.discordapp.net/attachments/1079940937310019628/1083894765000605788/neco-neko.gif';
			console.log(choice);
			break;

		case 3:
			image = 'https://media.discordapp.net/attachments/574483864123211791/1083812698275463228/TOMORROW.gif';
			console.log(choice);
			break;

		default:
			break;
		}
		const logEmbed = new EmbedBuilder().setColor('#FFABCD').setTitle('Burunyuu~~').setImage(image);
		await interaction.reply({ embeds: [logEmbed] });

	},

};