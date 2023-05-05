const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('neko')
		.setDescription('Traigan a las chicas gato! este comando genera una imagen random de una chica gato'),
	async execute(interaction) {
		try {
			const user = interaction.user.username;
			let nekoanswer = await ((await nekoClient.fetch('neko', 1)).results[0]);
			let nekourl = nekoanswer.url;
			let nekoname = nekoanswer.artist_name;
			const logEmbed = new EmbedBuilder().setColor('#ff55AA').setDescription('**'+user+'** invocó una neko-girl!').setImage(nekourl).setFooter({text: 'artista: '+ nekoname+ ' | K159|MoccaDev'});
			// console.log(nekoanswer)
			await interaction.reply({ embeds: [logEmbed] });
			console.log('Nekotest completed!');
		}
		catch (error) {
			await interaction.reply('cant finish the nekotest :<');
			console.log('cant generate the neko... this is the error:  \n\n');
			console.log(error);
			console.log('end of error log. pls continue.');
		}
	},

};