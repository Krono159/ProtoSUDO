const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const ver = '0.0.4B';
module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('vamo` a ver que cambios hubieron...')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const logEmbed = new EmbedBuilder().setColor('#ff55AA').setTitle(`Protosudo V${ver}`).setDescription(`Hey legionarios! ProtoSUDO v${ver} trae algunas novedades! \nSe ha añadido el sistema de reportes. este sistema es algo precario, se recomienda mejorar. Para realizar reportes usar comando "!report" en DM del bot. \n\n============================\nv0.0.4A\nSe ha implementado el comando de actualización con el que pueden ver este mensaje :3\n\nse ha añadido el comando "/burunyuu"  por motivos de entretenimiento. \n\n se han arreglado algunos bugs y se ha actualizado el archivo de inicio del bot para arreglar semantica y evitar el codigo espagueti.\n\n\n Dudas? Sugerencias? , pueden hacer ping a @Kaede159#0621 quien les brindará mas información al respecto. y recibira sugerencias para implementar en mi a futuro.`);
		await interaction.reply({ embeds: [logEmbed] });
	},
};
