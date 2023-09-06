const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const winston = require('winston');
const chalk = require('chalk');
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
				.setRequired(true))
		.setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator || PermissionsBitField.Flags.ManageRoles),

	async execute(interaction) {
		const member = interaction.options.getMember('target');
		const role = interaction.options.getRole('role');
		const forbiden = {
			title: 'error',
			description: 'No tienes permiso para usar este comando!',
			image: {
				url: 'https://http.cat/401',
			},
			footer: {
				text: 'ProtoSUDO',
			},
		};
		try {
			
		
		if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator || PermissionsBitField.Flags.ManageRoles)) return await interaction.reply({ embeds: [forbiden], ephemeral: true });
		if (member.roles.cache.has(role => role.name === 'role name')) {
			const answremb = {
				title: 'error',
				description: `${member} already have the role ${role}`,

				footer: {
					text: 'ProtoSUDO',
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
						text: 'ProtoSUDO',
					},
				};
				console.log(chalk.green(`added role ${role.name} to ${member.user.username}`))
				interaction.reply({ embeds: [answremb] });
			}
			catch (error) {
				logger.error('error adding role, error: ', error);
				const errorembed = {
					title: 'error',
					description: 'error on execution\ncontact devs',
					footer: {
						text: 'ProtoSUDO',
					},
				};
				await interaction.reply({ embeds: [errorembed], ephemeral:false });
			}
		}
	} catch (error) {
		logger.error('error adding role, error: ', error);
		const errorembed = {
			title: 'error',
			description: 'error on execution\ncontact devs',
			footer: {
				text: 'ProtoSUDO',
			},
		};
		await interaction.reply({ embeds: [errorembed], ephemeral:false });
	}
	},
};