const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
const color = '#ffabcd';
let counter = 0;
const directory = 'yeet';
const logger = require('../../InternalModules/logger.js');
function print(string) {
	console.log(string);
}

module.exports = {

	data: new SlashCommandBuilder()
		.setName('yeet')
		.setDescription('Lanza a alguien hacia el infinito! (o lanzate a ti mismo ;3)')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('a quien quieres lanzar? deja vacio para lanzarte a ti mismo')
				.setRequired(false)),
	async execute(interaction) {
		const tgt = interaction.options.getUser('target');
		try {
			if (tgt != undefined) {
				const guilty = interaction.user.username;
				const nekoanswer = await ((await nekoClient.fetch('yeet', 1)).results[0]);
				const nekoUrl = nekoanswer.url;
				const nekoName = nekoanswer.anime_name;
				const logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** lanzó a ${tgt} alv!`).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
				counter += 1;
				logger(`INFO: ${directory} command has been used ${counter} times since last reboot\nINFO: image: ${nekoUrl}, name: ${nekoName}`, directory, 'info');
				print(`${directory} command has been used ${counter} times since last reboot`);
				print(`image: ${nekoUrl}, name: ${nekoName}`);
				await interaction.reply({ embeds: [logEmbed] });
			}
			else {
				tgt = interaction.user.username;
				const nekoanswer = await ((await nekoClient.fetch('yeet', 1)).results[0]);
				const nekoUrl = nekoanswer.url;
				const nekoName = nekoanswer.anime_name;
				const logEmbed = new EmbedBuilder().setColor(color).setDescription(`aqui vamos... ve al infinito,  ${tgt}!!`).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
				counter += 1;
				logger(`INFO: ${directory} command has been used ${counter} times since last reboot\nINFO: image: ${nekoUrl}, name: ${nekoName}`, directory, 'info');
				print(`${directory} command has been used ${counter} times since last reboot`);
				print(`image: ${nekoUrl}, name: ${nekoName}`);
				await interaction.reply({ embeds: [logEmbed] });
			}
		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			print('cant generate the neko... check logs to validate');
			logger(`ERROR: ${directory} command has failed. Error: ERROR`, `${directory}`, 'FATAL');
		}
	},

};