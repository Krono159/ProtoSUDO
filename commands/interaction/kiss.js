const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const admin = '610937299903184898';
const winston = require('winston');
const nekoClient = new NbClient();
const color = '#ffabcd';
let counter = 0;
const logger = winston.createLogger({
	transports: [new winston.transports.Console()],
});

module.exports = {

	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('Usa este comando para besar a alguien :3')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('a quien quieres besar? °3°')
				.setRequired(true)),
	async execute(interaction) {
		try {
			const tgt = interaction.options.getUser('target');
			const guilty = interaction.user.username;
			if (tgt.id === admin && interaction.user.id !== admin) {
				console.log('joined first if');
				const nekoanswer = await ((await nekoClient.fetch('punch', 1)).results[0]);
				const nekoUrl = nekoanswer.url;
				const nekoName = nekoanswer.anime_name;
				const logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** intentó besar a **${tgt.username}** pero falló!`).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
				console.log('intentaron besar a krono? pendejos')
				await interaction.reply({ embeds: [logEmbed] });
			}
			else if (tgt.id !== interaction.user.id) {
				const nekoanswer = await ((await nekoClient.fetch('kiss', 1)).results[0]);
				const nekoUrl = nekoanswer.url;
				const nekoName = nekoanswer.anime_name;
				const logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** besó a **${tgt.username}** !`).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
				await interaction.reply({ embeds: [logEmbed] });
			}
			else {
				const nekoanswer = await ((await nekoClient.fetch('kiss', 1)).results[0]);
				const nekoUrl = nekoanswer.url;
				const nekoName = nekoanswer.anime_name;
				const logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** se besó a si mism@! como es eso posible?`).setImage(nekoUrl).setFooter({ text: 'anime: ' + nekoName });
				await interaction.reply({ embeds: [logEmbed] });
			}
			counter += 1;
			logger.info( 'kiss command has been used ' + counter + ' times since last reboot');
			logger.info('image: ',nekoUrl,' name: ',nekoName)

		}
		catch (error) {
			await interaction.reply(`cant generate the interaction. pls report to ${admin} :<\nhttps://http.cat/400`);
			console.log('cant generate the neko... this is the error');
			console.log(error);
		}
	},

};

