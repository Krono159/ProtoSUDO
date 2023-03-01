const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Select a member and ban them.')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for banning'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false),
	async execute(interaction) {
		/*const target = interaction.options.getUser('target');
		await interaction.reply('beep beep! this command is under development! any malfunction pls report to <@610937299903184898> or in the development server (https://discord.gg/sB92gTZUGc)');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';

		await interaction.followUp(`Banning ${target.username} for reason: ${reason}`);
		try {

			await interaction.guild.members.ban(target.username);
			console.log(`user ${target.username} got the hammer!`);
			console.log('Beep beep! this command on development is being tested... OwO');
		}
		catch (error) {
			await interaction.followUp('There was an error! check ban module and related pls.');
			console.log('There was an error! check ban module and related pls.');
		}*/
		await interaction.followUp('Command disabled.');
	},

};