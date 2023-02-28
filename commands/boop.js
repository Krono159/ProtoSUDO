const { SlashCommandBuilder } = require("discord.js");

module.exports = {
        
    data: new SlashCommandBuilder()
        .setName("boop")
        .setDescription('boops you back'),
    
    async execute(interaction){
        await interaction.reply("*Boops you back*")
    }
    
}