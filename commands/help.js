const {SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require ('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Aqui puedes ver que hace cada comando'),
    async execute (interaction) {
        const embed = new EmbedBuilder()
        .setColor('LuminousVividPink')
        .setTitle('ProtoHelp Center')
        .setDescription('help command guide: ')
        .addFields({name: 'pagina 1',value:'Menú principal'})
        .addFields({name: 'Entretenimiento',value:'Comandos de entretenimiento (button2)'})
        .setFooter({text: 'K159 || MoccaDev'})
        .setTimestamp()

        const embed2 = new EmbedBuilder()
        .setColor('LuminousVividPink')
        .setTitle('Entretenimiento')
        .setDescription('help command guide: ')
        .addFields({name: '/ban',value:'Banea a un usuario (ahora disponible para todos)'})
        .addFields({name: '/blush',value:'Muestra un gif indicando que alguien te hizo sonrojar'})
        .addFields({name: '/burunyuu',value:'Muestra un gif random de neco arc'})
        .addFields({name: '/creditos',value:'under construction'})
        .addFields({name: '/cry',value:'Muestra un gif indicando que alguien te hizo llorar'})
        .addFields({name: '/cuddle',value:'Muestra un gif indicando que te acurrucas con alguien'})
        .addFields({name: '/dance',value:'La vida es muy bella para desperdiciarla, ven y baila!'})
        .addFields({name: '/facepalm',value:'viste algo demasiado estupido... no te juzgo'})
        .addFields({name: '/help',value:'abre el ProtoHelp Center'})
        .addFields({name: '/holi',value:'saluda a todos! :3'})
        .addFields({name: '/hug',value:'abraza a alguien'})
        .addFields({name: '/kill',value:'... no dire nada, solo hazlo'})
        .addFields({name: '/kiss',value:'besa a alguien! (que no sea krono/kaede...)'})
        .addFields({name: '/neko',value:'Traigan las chigas gato!\n este comando muestra un gif aleatorio de una chica-gato'})
        .addFields({name: '/pat',value:'acaricia la cabeza de alguien :3'})
        .addFields({name: '/ping',value:'prueba la latencia del bot'})
        .addFields({name: '/poke',value:'llama la atencion de alguien molestandolo :3'})
        .addFields({name: '/slap',value:'lo que pasa si intentas besar a krono/kaede'})
        .addFields({name: '/update',value:'Muestra el registro de cambios del bot'})
        .addFields({name: '/yeet',value:'Lanza a alguien muy lejos!'})
        .setFooter({text: 'K159 || MoccaDev'})
        .setTimestamp()

        
        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('page1')
            .setLabel('inicio')
            .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
            .setCustomId('page2')
            .setLabel('entretenimiento')
            .setStyle(ButtonStyle.Success)
        )

        const  message = await interaction.reply({embeds: [embed], components: [button]})
        const collector = await message.createMessageComponentCollector();


        collector.on('collect', async i =>{
            
            if(i.customId === 'page1'){
                if(i.user.id !== interaction.user.id){
                    return await i.reply({content: `solo ${interaction.user.tag} puede usar estos botones por ahora`, ephimeral: true})
                }
                await i.update({embeds:[embed],components: [button]})
            }
            
            if(i.customId === 'page2'){
                if(i.user.id !== interaction.user.id){
                    return await i.reply({content: `solo ${interaction.user.tag} puede usar estos botones por ahora`, ephimeral: true})
                }
                await i.update({embeds:[embed2],components: [button]})
            }
        })
        
    }
}