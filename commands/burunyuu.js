const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {

	data: new SlashCommandBuilder()
		.setName('burunyuuu')
		.setDescription('lets summon neco arc'),

	async execute(interaction) {
		const logEmbed = new EmbedBuilder().setColor('#ff0000').setTitle('Burunyuu~~').setDescription(' ').setImage('https://media.discordapp.net/attachments/574483864123211791/1080687680637120533/latest.png?width=379&height=676');
		await interaction.reply({ embeds: [logEmbed] });

	},

};