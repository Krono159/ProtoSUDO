const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const ver = '1.0.1mu1';
module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('vamo` a ver que cambios hubieron...')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const logEmbed = new EmbedBuilder().setColor('#ff55AA').setTitle(`Protosudo V${ver}`).setDescription('Hola! en la minor update 1 se añadió el comando ```/help``` donde se muestran todos los comandos disponibles para protoSUDO y el comando ```/kiss``` (mas información en ```/help```). Adicionalmente, se han actualizado los footer de todos los comandos.\nSe está trabajando en crear un comando de creditos, el cual se tiene planeado para la version 1.0.3').setFooter({text: 'K159|MoccaDev'});
		await interaction.reply({ embeds: [logEmbed] });
	},
};
 