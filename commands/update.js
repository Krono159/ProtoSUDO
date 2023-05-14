const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const ver = '1.0.1mu1';
module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('vamo` a ver que cambios hubieron...')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const logEmbed = new EmbedBuilder().setColor('#ff55AA').setTitle(`Protosudo V${ver}`).setDescription('Hola! en la minor update 2 se añadió el comando `/kick` y creditos en el menu de ayuda.').setFooter({text: 'K159|MoccaDev'});
		await interaction.reply({ embeds: [logEmbed] });
	},
};
 