const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client: NbClient } = require('nekos-best.js');
const admin = '610937299903184898'
const nekoClient = new NbClient();
let color = '#ffabcd';
let counter = 0;

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
			let tgt = interaction.options.getUser('target');
			let guilty = interaction.user.username; 
            if(tgt.id === admin && interaction.user.id !== admin){
                console.log('joined first if')
                    let nekoanswer = await ((await nekoClient.fetch('punch', 1)).results[0]);
                    let nekoUrl = nekoanswer.url;
                    let nekoName = nekoanswer.anime_name
                    let logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** intentó besar a **${tgt.username}** pero falló!`).setImage(nekoUrl).setFooter({text: 'anime: '+ nekoName+ ' | K159|MoccaDev'});
                    await interaction.reply({  embeds: [logEmbed] });
            }
            else{
                if (tgt.id !== interaction.user.id) {
                    let nekoanswer = await ((await nekoClient.fetch('kiss', 1)).results[0]);
                    let nekoUrl = nekoanswer.url;
    			    let nekoName = nekoanswer.anime_name
                    let logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** besó a **${tgt.username}** !`).setImage(nekoUrl).setFooter({text: 'anime: '+ nekoName+ ' | K159|MoccaDev'});
                    await interaction.reply({  embeds: [logEmbed] });
                } else {
                    let nekoanswer = await ((await nekoClient.fetch('kiss', 1)).results[0]);
                    let nekoUrl = nekoanswer.url;
                    let nekoName = nekoanswer.anime_name
                    let logEmbed = new EmbedBuilder().setColor(color).setDescription(`**${guilty}** se besó a si mism@! como es eso posible?`).setImage(nekoUrl).setFooter({text: 'anime: '+ nekoName+ ' | K159|MoccaDev'});
                    await interaction.reply({  embeds: [logEmbed] });
                }
            }          
			counter += 1;
			console.log('kiss command has been used ' + counter + ' times since last reboot');
			
		}
		catch (error) {
			await interaction.reply(`cant generate the interaction. pls report to ${admin} :<\nhttps://http.cat/400`);
			console.log('cant generate the neko... this is the error');
			console.log(error);
		}
    },

}; 

