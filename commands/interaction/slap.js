const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const nekoClient = new NbClient();
const logger = require('../../InternalModules/logger.js');
const color = '#ffabcd';
const directory = 'slap';
let counter = 0;
function print(string) {
	console.log(string);
}

module.exports = {

	data: new SlashCommandBuilder()
		.setName('slap')
		.setDescription('Dale una cachetada a alguien! (seguramente se lo merece...)')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('a quien quieres golpear? :>')
				.setRequired(true)),
	async execute(interaction) {
		try {
			const tgt = interaction.options.getUser('target');
			const guilty = interaction.user.username;
			if (tgt.username == guilty) {interaction.reply(`No puedes golpearte a ti mismo **${guilty}**!!`);}
			else {
				const nekoanswer = await ((await nekoClient.fetch('slap', 1)).results[0]);
				const nekoUrl = nekoanswer.url;
				const nekoName = nekoanswer.anime_name;
				const logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** le dio una cachetada a ${tgt} D: `).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
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