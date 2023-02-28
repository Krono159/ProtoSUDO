const { SlashCommandBuilder } = require("discord.js");
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
module.exports = {
        
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription('Replies with "What? im alive!"'),
    
    async execute(interaction){
        await interaction.reply("What's this? Im alive! Calculating the boops of the latency ");
        const timestamp = Date.now();
        interaction.followUp('boop.');
            // Calculate the ping latency
        const latency = Date.now() - timestamp;
        await delay(1000)
        try {
            interaction.followUp(`boop..`);
            await delay(1000)
            interaction.followUp(`boop...`);
            await delay(1000)
        } catch (error) {
            interaction.followUp("There was a problem booping, please read the docs you dumb coder!");
            console.log(error);
        }
        // Edit the message with the ping latency
        interaction.followUp(`booping completed! Bot latency: ${latency}ms`);
    }
    
}