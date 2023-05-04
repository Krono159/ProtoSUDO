const { SlashCommandBuilder } = require("discord.js");
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
module.exports = {
        
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription('test the bot latency'),
    
    async execute(interaction){
        await interaction.reply("testing latency");
        const timestamp = Date.now();
        // Calculate the ping latency
        const latency = Date.now() - timestamp;
        await delay(1000)
        // Edit the message with the ping latency
        interaction.followUp(`ping test completed! latency: ${latency}ms`);
    }
    
}