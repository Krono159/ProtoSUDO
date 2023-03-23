const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const ver = '0.0.5RR';
module.exports = {
	data: new SlashCommandBuilder()
		.setName('holi')
		.setDescription('Un comando para saludar :3')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		console.log('command hihi has been used')
		await interaction.reply({ content: "hey hey, Hola a todos! :D\nhttps://cdn.discordapp.com/attachments/1088564782124236830/1088564909144559636/hellothere.mp4"});
	},
};
//,files: ["./video/video.mp4"]