const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
let counter = 0
module.exports = {
	data: new SlashCommandBuilder()
		.setName('cry')
		.setDescription('alguien te hizo llorar :c'),
	async execute(interaction) {
		try {
			let user = interaction.user.username;
			let nekoAnswer = await ((await nekoClient.fetch('cry', 1)).results[0]);
			let nekoUrl = nekoAnswer.url;
			let nekoName = nekoAnswer.anime_name;
			//console.log(nekoAnswer)
			let logEmbed = new EmbedBuilder().setColor('#ff55AA').setDescription('**' + user + '** está llorando :c').setImage(nekoUrl).setFooter({text: 'anime: '+ nekoName+ ' | K159|MoccaDev'});
			
			await interaction.reply({ embeds: [logEmbed] });
			console.log('cry successful. people have cried',counter,' times');

		}
		catch (error) {
			await interaction.reply('cant finish the nekointeraction :<\nhttps://http.cat/400');
			console.log('cant generate the neko... this is the error:  \n\n');
			console.log(error);
			console.log('end of error log. pls continue.');
		}
	},

};

