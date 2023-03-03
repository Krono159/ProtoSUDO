const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const ver = '0.0.4A';
module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('vamo` a ver que cambios hubieron...')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const logEmbed = new EmbedBuilder().setColor('#ff55AA').setTitle(`Protosudo V${ver}`).setDescription(`Hey legionarios! ProtoSUDO v${ver} trae algunas novedades\nLo principal es el registro de mensajes eliminados. Esta nueva funcion pretende mantener un registro de los mensajes eliminados del servidor por motivos de auditoria y control de mensajes posiblemente maliciosos (esta funcion pretende reemplazar el LOG de mensajes proveido por @Dyno.).\n\nSe ha implementado el comando de actualización con el que pueden ver este mensaje :3\n\nse ha añadido el comando /burunyuu por motivos de entretenimiento. \n\n se han arreglado algunos bugs y se ha actualizado el archivo de inicio del bot para arreglar semantica y evitar el codigo espagueti.\n\n\n Dudas? Sugerencias? , pueden hacer ping a @Kaede159#0621 quien les brindará mas información al respecto. y recibira sugerencias para implementar en mi a futuro.`);
		await interaction.reply({ embeds: [logEmbed] });
	},
};
