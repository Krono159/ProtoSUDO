const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
let color = '#ffabcd';
let cudcounter = 0;
module.exports = {

	data: new SlashCommandBuilder()
		.setName('cuddle')
		.setDescription('acurrucate con alguien :3')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('con quien quieres acurrucarte? :>')
				.setRequired(true)),
	async execute(interaction) {
		try {
			let tgt = interaction.options.getUser('target');
			let guilty = interaction.user.username;
			let nekoanswer = await ((await nekoClient.fetch('cuddle', 1)).results[0]);
			let nekoUrl = nekoanswer.url;
			let nekoName = nekoanswer.anime_name
			let logEmbed = new EmbedBuilder().setColor(color).setTitle('aww').setDescription(` **${guilty}** se acurruca con ${tgt}~`).setImage(nekoUrl).setFooter({text: 'anime: '+ nekoName+ ' | K159|MoccaDev'});
			cudcounter += 1;
			console.log('cuddle command has been used ' + cudcounter + ' times since last reboot');
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			console.log('cant generate the neko... this is the error');
			console.log(error);
		}
	},

}; 