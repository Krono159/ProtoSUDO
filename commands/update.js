const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const ver = '0.0.8B01';
module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('vamo` a ver que cambios hubieron...')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const logEmbed = new EmbedBuilder().setColor('#ff55AA').setTitle(`Protosudo V${ver}`).setDescription(
			`--se modificó el comando ban.js (un easter egg quizas?)\n--se añadió el comando blush.js\n--se modificó el comando bonk.js por slap.js para usar la API nekos best\n--se modificó el comando boop.js por pat.js para usar la API nekos best\n--se modificó el comando burunyuu.js\n--se añadió el comando cry.js\n--se añadió el comando cuddle.js\n--se añadió el comando dance.js\n--se añadió el comando facepalm.js\n--se modificó el comando hihi.js para usar la API nekos best\n--se añadió el comando hug.js\n--se añadió el comando kill.js\n--se añadió el comando neko.js\n--se modificó el comando  ping.js\n--se añadió el comando poke.js\n--se modificó el archivo de actualización update information.\n--se añadió el comando yeet.js\nse actualizaron los archivos de inicio del bot`
			);
		await interaction.reply({ embeds: [logEmbed] });
	},
};
 