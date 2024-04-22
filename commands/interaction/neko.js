const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
let counter = 0;
const logger = require('../../InternalModules/logger')
const print = require('../../InternalModules/Pythonfy')
const directory = 'neko'
module.exports = {
	data: new SlashCommandBuilder()
		.setName('neko')
		.setDescription('Traigan a las chicas gato! este comando genera una imagen random de una chica gato'),
	async execute(interaction) {
		try {
			const user = interaction.user.username;
			const nekoanswer = await ((await nekoClient.fetch('neko', 1)).results[0]);
			const nekourl = nekoanswer.url;
			const nekoname = nekoanswer.artist_name;
			const logEmbed = new EmbedBuilder().setColor('#ff55AA').setDescription('**' + user + '** invocó una neko-girl!').setImage(nekourl).setFooter({ text: 'artista: ' + nekoname });
			// console.log(nekoanswer)
			counter += 1;
			logger(`INFO: ${directory} command has been used ${counter} times since last reboot\nINFO: image: ${nekoUrl}, name: ${nekoName}`, directory,'info')
			print(`${directory} command has been used ${counter} times since last reboot`);
			print(`image: ${nekoUrl}, name: ${nekoName}`);
			await interaction.reply({ embeds: [logEmbed] });
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			print('cant generate the neko... check logs to validate');
			logger(`ERROR: ${directory} command has failed. Error: ${error}`,`${directory}`,'FATAL');
		}
	},

};