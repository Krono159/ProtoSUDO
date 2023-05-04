const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('holi')
		.setDescription('Saluda a todos!'),
	async execute(interaction) {
		try {
			let user = interaction.user.username;
			let nekoanswer = await ((await nekoClient.fetch('smile', 1)).results[0]);
			let nekourl = nekoanswer.url;
			let nekotitle = nekoanswer.anime_name
			let logEmbed = new EmbedBuilder().setColor('#ff55AA').setDescription('**' + user + '** saluda a todos!').setImage(nekourl).setFooter({text: 'anime: '+ nekotitle});
			await interaction.reply({ embeds: [logEmbed] });

		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			console.log('cant generate the neko... this is the error');
			console.log(error);
		}
	},

};

 