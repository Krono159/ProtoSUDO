const { SlashCommandBuilder } = require('discord.js');
const winston = require('winston');
const logger = winston.createLogger({
	transports: [
		new winston.transports.Console(),
	],
});
module.exports = {

	data: new SlashCommandBuilder()
		.setName('addrole')
		.setDescription('add role to a user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true))
		.addRoleOption(option =>
			option
				.setName('role')
				.setDescription('Target user')
				.setRequired(true)),

	async execute(interaction) {
		const member = interaction.options.getMember('target');
		const role = interaction.options.getRole('role');
		if (member.roles.cache.has(role => role.name === 'role name')) {
			const answremb = {
				title: 'error',
				description: `${member} already have the role ${role}`,

				footer: {
					text: 'Danko on dev stage',
				},
			};
			interaction.reply({ embeds: [answremb], ephemeral: true });
		}
		else {
			try {
				member.roles.add(role);
				const answremb = {
					title: 'Role added',
					description: `added role ${role} to ${member}`,

					footer: {
						text: 'Danko on dev stage',
					},
				};
				interaction.reply({ embeds: [answremb] });
			}
			catch (error) {
				logger.error('error adding role, error: ', error);
				const errorembed = {
					title: 'error',
					description: 'error on execution\ncontact devs',
					image: {
						url: 'https://http.cat/417',
					},
					footer: {
						text: 'Danko on dev stage',
					},
				};
				await interaction.reply({ embeds: [errorembed], ephemeral:false });
			}
		}
	},
};