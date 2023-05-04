const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
let color = '#000000';
let facecounter = 0;
module.exports = {

	data: new SlashCommandBuilder()
		.setName('facepalm')
		.setDescription('tranqui, tampoco habia visto algo tan estupido...'),
	async execute(interaction) {
		try {
			let nekoanswer = await ((await nekoClient.fetch('facepalm', 1)).results[0]);
			let nekoUrl = nekoanswer.url;
			let nekoName = nekoanswer.anime_name
			let logEmbed = new EmbedBuilder().setColor(color).setTitle('...').setImage(nekoUrl).setFooter({text: 'Anime: '+nekoName});
			facecounter += 1;
			console.log('facepalm command has been used ' + facecounter + ' times since last reboot');
			await interaction.reply({  embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			console.log('cant generate the neko... this is the error');
			console.log(error);
		}
	},

}; 