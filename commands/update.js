const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const ver = '0.0.4B hotfix 1';
module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('vamo` a ver que cambios hubieron...')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const logEmbed = new EmbedBuilder().setColor('#ff55AA').setTitle(`Protosudo V${ver}`).setDescription(`Hey legionarios! ProtoSUDO v${ver} trae algunas novedades! \n se ha actualizado el sistema de reportes. ahora al recibir un reporte, el bot hace ping al equipo administrativo\n\n============================\nV0.0.4B\nSe ha añadido el sistema de reportes. este sistema es algo precario, se recomienda mejorar. Para realizar reportes usar comando "!report" en DM del bot.`);
		await interaction.reply({ embeds: [logEmbed] });
	},
};
