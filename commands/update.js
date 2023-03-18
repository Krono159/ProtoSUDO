const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const ver = '0.0.5RR';
module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('vamo` a ver que cambios hubieron...')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const logEmbed = new EmbedBuilder().setColor('#ff55AA').setTitle(`Protosudo V${ver}`).setDescription(`Hey legionarios! ProtoSUDO **v${ver}** trae algunas novedades! \n\n Se ha aplicado un parche al comando /bonk.\n\nse ha añadido un easter egg. \n\n============================\n**V0.0.4E**\n\nse ha implementado el comando /bonk y se han añadido 2 imagenes al comando /burunyuu.`);
		await interaction.reply({ embeds: [logEmbed] });
	},
};
