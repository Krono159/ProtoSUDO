const { SlashCommandBuilder,  } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('banea a alguien (ahora disponible para todos!)')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for banning')),
	async execute(interaction) {
		await interaction.reply('https://http.cat/403');
		await interaction.followUp('no puedes usar este comando! hey <@610937299903184898>, mira como intentan banear a alguien...');
	},
}; 
