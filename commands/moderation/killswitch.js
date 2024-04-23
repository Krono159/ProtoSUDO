const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
// Otro script

const AKS = require('../../InternalModules/execute');

// Ejemplo: Ejecutar el comando "ls" en la consola


module.exports = {

	data: new SlashCommandBuilder()
		.setName('killswitch')
		.setDescription('solo para emergencias, el bot morirá hasta ser iniciado en consola')
		.setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),

	async execute(interaction) {
		interaction.reply('si el bot no responde con un followup, esto significa que el killswitch ha sido activado');
		try {
			AKS();

		}
		catch (error) {
			await interaction.followup('Error al matar a Hades, contactar con <@610937299903184898> para un apagado manual');
		}
		await interaction.followup('Error al ejecutar el killswitch');

	},
};