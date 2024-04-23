const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
let title = '';
let image = '';
const counter = 0;
let color = '';
const logger = require('../../InternalModules/logger');
const print = require('../../InternalModules/Pythonfy');
const directory = 'burunyuu';

module.exports = {

	data: new SlashCommandBuilder()
		.setName('burunyuu')
		.setDescription('lets summon neco arc'),
	async execute(interaction) {
		const guilty = interaction.member.displayName;
		const choice = Math.floor(Math.random() * 7) + 1;
		try {
			switch (choice) {
			case 1:
				image = 'https://media.discordapp.net/attachments/574483864123211791/1080687680637120533/latest.png?width=379&height=676';
				color = '#FFABCD';
				title = 'Burunyuu~~';
				console.log(choice);
				break;

			case 2:
				image = 'https://media.discordapp.net/attachments/1079940937310019628/1083894765000605788/neco-neko.gif';
				color = '#FFFF00';
				title = 'Burunyuu~~';
				console.log(choice);
				break;

			case 3:
				image = 'https://media.discordapp.net/attachments/574483864123211791/1083812698275463228/TOMORROW.gif';
				color = '#FF0000';
				title = 'Burunyuu~~';
				console.log(choice);
				break;

			case 4:
				image = 'https://media.discordapp.net/attachments/1083903422476079246/1085702465279774782/neco_1.gif';
				color = 'CCAABB';
				title = 'Burunyuu~~';
				console.log(choice);
				break;

			case 5:
				image = 'https://media.discordapp.net/attachments/1083903422476079246/1085701458093146253/neco-arc.gif';
				color = '#FFABCD';
				title = 'Burunyuu~~';
				console.log(choice);
				break;

			case 6:
				image = 'https://media.discordapp.net/attachments/1083903422476079246/1085703680050868285/neco-arc-cross.gif';
				color = 'DCBAFF';
				title = 'Burunyuu~~';
				console.log(choice);
				break;
			case 7:
				image = 'https://media.discordapp.net/attachments/1083903422476079246/1085730887271993354/neco-death.gif';
				title = `NYAAAAAAAAAAAA!  ${guilty} mató a necoark D:` ;
				color = '#000000';
				console.log(choice);
				break;
			default:
				image = 'https://media.discordapp.net/attachments/1083903422476079246/1085703680050868285/neco-arc-cross.gif';
				color = 'DCBAFF';
				title = 'Burunyuu~~';
				console.log('default');
				break;
			}
			const logEmbed = new EmbedBuilder().setColor(color).setTitle(title).setImage(image);
			await interaction.reply({ embeds: [logEmbed] });
			logger(`INFO: ${directory} command has been used undefined times since last reboot\nINFO: image: ${image}, name: ${choice}`, directory, 'info');
			print(`${directory} command has been used ${counter} times since last reboot`);
			print(`image: ${image}, name: ${choice}`);

		}
		catch (error) {
			await interaction.reply('cant generate the interaction. pls report to <@610937299903184898> :<\nhttps://http.cat/400');
			print('cant generate the neko... check logs to validate');
			logger(`ERROR: ${directory} command has failed. Error: ${error}`, `${directory}`, 'FATAL');
		}
	},

};