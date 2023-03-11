const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const ver = '0.0.4E';
module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('vamo` a ver que cambios hubieron...')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const logEmbed = new EmbedBuilder().setColor('#ff55AA').setTitle(`Protosudo V${ver}`).setDescription(`Hey legionarios! ProtoSUDO **v${ver}** trae algunas novedades! \n trae algunas novedades! \n se ha implementado el comando /bonk y se han añadido 2 imagenes al comando /burunyuu.\n\n============================\n**V0.0.4D**\nse ha actualizado el sistema de reportes. ahora al recibir un reporte, el bot hace ping al equipo administrativo y se ha corregido la sintaxis del modulo principal`);
		await interaction.reply({ embeds: [logEmbed] });
	},
};

