const {SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require ('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Aqui puedes ver que hace cada comando'),
    async execute (interaction) {
        const embed = new EmbedBuilder()
        .setColor('LuminousVividPink')
        .setTitle('ProtoHelp Center - Menú')
        .setDescription('help command guide: ')
        .addFields({name: 'pagina 1',value:'Menú principal'})
        .addFields({name: 'Entretenimiento',value:'Comandos de entretenimiento (entretenimiento)'})
        .setFooter({text: 'K159 || MoccaDev'})
        .setThumbnail('https://images-ext-2.discordapp.net/external/xgX44pYEeQnvEsC1S_LGwfxFrzZeIM0vYzLTmt0tNfQ/%3Fsize%3D4096/https/cdn.discordapp.com/icons/792612510666457128/9985381eb9b5069b94f6d42b502dc999.png')
        .setTimestamp()

        const embed2 = new EmbedBuilder()
        .setColor('LuminousVividPink')
        .setTitle('ProtoHelp Center - Entretenimiento')
        .setDescription('help command guide: ')
        .addFields({name: '/ban',value:'Banea a un usuario (ahora disponible para todos)'})
        .addFields({name: '/blush',value:'Muestra un gif indicando que alguien te hizo sonrojar'})
        .addFields({name: '/burunyuu',value:'Muestra un gif random de neco arc'})
        .addFields({name: '/cry',value:'Muestra un gif indicando que alguien te hizo llorar'})
        .addFields({name: '/cuddle',value:'Muestra un gif indicando que te acurrucas con alguien'})
        .addFields({name: '/dance',value:'La vida es muy bella para desperdiciarla, ven y baila!'})
        .addFields({name: '/facepalm',value:'viste algo demasiado estupido... no te juzgo'})
        .addFields({name: '/help',value:'abre el ProtoHelp Center'})
        .addFields({name: '/holi',value:'saluda a todos! :3'})
        .addFields({name: '/hug',value:'abraza a alguien'})
        .addFields({name: '/kick',value:'Patea a alguien!'})
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
        .setThumbnail('https://images-ext-2.discordapp.net/external/xgX44pYEeQnvEsC1S_LGwfxFrzZeIM0vYzLTmt0tNfQ/%3Fsize%3D4096/https/cdn.discordapp.com/icons/792612510666457128/9985381eb9b5069b94f6d42b502dc999.png')
        .setTimestamp()

        const creds = new EmbedBuilder()
        .setColor('LuminousVividPink')
        .setTitle('ProtoHelp Center - Creditos')
        .setDescription('Gracias a todos los que usan a protosudo por su feedback e ideas, a VarkoMS por su ayuda con el codigo del bot y el testing.\n gracias a todos por hacer realidad este sueño')
        .addFields({name:'Libreria de imagenes',value:'Las imagenes para los comandos (excepto el comando `/burunyuu`) son gracias a la API NekosBest. Mas información en https://nekos.best/'})
        .addFields({name: 'Libreria de codigo', value: 'ProtoSUDO está escrito en Javascript bajo la libreria Discord.JS en Node.JS'})
        .addFields({name:'Soporte', value:'Nada de esto habria sido posible sin la ayuda de la comunidad de discord.JS quienes me ayudaron a encontrar los errores mas simples y los mas complejos que cometí al crear a Proto.'})
        .addFields({name: 'Comunidad', value: 'Por ultimo, gracias a la legión del ganso, quienes han sido mi familia en los ultimos 4 años (al momento de escrito este agradecimiento, 06/mayo/2023) y a Jeffar,quien me dió la posibilidad de ser uno de sus administradores. '})
        .setFooter({text: 'K159 || MoccaDev'})
        .setThumbnail('https://images-ext-2.discordapp.net/external/xgX44pYEeQnvEsC1S_LGwfxFrzZeIM0vYzLTmt0tNfQ/%3Fsize%3D4096/https/cdn.discordapp.com/icons/792612510666457128/9985381eb9b5069b94f6d42b502dc999.png')
        .setTimestamp()

        const disembed = new EmbedBuilder()
        .setColor('LuminousVividPink')
        .setTitle('ProtoHelp ')
        .setDescription('ProtoSUDO es un bot de uso libre para la comunidad de discord de jeffarVlogs y sus amigos.\n ProtoSUDO es de codigo abierto (alojado en: https://github.com/Krono159/ProtoSUDO) y dicho codigo podrá ser usado para el proyecto Sapphire por MoccaDev|K159. A pesar de esto, protoSUDO **NO** Recolecta ningun tipo de datos de los usuarios de forma permanente, los datos recogidos de forma temporal son: ID de usuario (usado en ejecución de comando para definir quien uso el comando y lanzar esto en la respuesta del mensaje, esta información es inmediatamente descartada luego de ejecutado el comando) Mensajes de usuario via DM: Estos son recolectados de forma temporal para generar los reportes cuando se usa el comando `!report [reporte]` en el DM del bot para generar un embebido que será enviado a los administradores del servidor los cuales podrán ver dicha información y cual fue el usuario que inició el reporte. ProtoSUDO genera un mensaje tipo LOG en consola que indica cuantas veces se ha ejecutado cada comando (un ejemplo de esto seria: `facepalm command has been used 1 times since last reboot`) siendo esta la unica información recolectada por parte del bot, esta con fines de estadistica de uso. \n ProtoSUDO, Krono159, Luis Sepulveda y/o MoccaDev NO se hace responsable por la recolección de datos por parte de las API usadas, por favor leer los terminos y condicioned y la politica de privacidad de Discord.js, Discord y Nekos.best para mas información sobre como recolectan los datos de usuario cada una de las API\n\nEn caso de ser recolectada mas información por parte de protoSUDO a parte de la ya mencionada en este disclaimer, ProtoSUDO lo mencionará tanto en una actualización de este modulo como en el mensaje de `/update`.\n\n ProtoSUDO, ProtoDEV, Dudas, Quejas, Reclamos, Sugerencias? Pueden hacerle ping a Kaede159#0621 o en nuestro servidor de soporte: https://discord.gg/pQ3sVH3nb8\n\nGracias por confiar en ProtoSUDO!\nLicencia: ProtoSUDO © 2023 by Krono159 & MoccaDev is licensed under Attribution-NonCommercial-NoDerivatives 4.0 International')
        .setFooter({text: 'K159 || MoccaDev'})
        .setThumbnail('https://images-ext-2.discordapp.net/external/xgX44pYEeQnvEsC1S_LGwfxFrzZeIM0vYzLTmt0tNfQ/%3Fsize%3D4096/https/cdn.discordapp.com/icons/792612510666457128/9985381eb9b5069b94f6d42b502dc999.png')
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
            .setStyle(ButtonStyle.Success),
            
            new ButtonBuilder()
            .setCustomId('credits')
            .setLabel('Creditos')
            .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
            .setCustomId('disclaimer')
            .setLabel('Disclaimer')
            .setStyle(ButtonStyle.Success)
        )

        const  message = await interaction.reply({embeds: [embed], components: [button]})
        const collector = await message.createMessageComponentCollector();


        collector.on('collect', async i =>{
            
            if(i.customId === 'page1'){
                if(i.user.id !== interaction.user.id){
                    return await i.reply({content: `solo ${interaction.user.tag} puede usar estos botones por ahora`, ephemeral: true})
                }
                await i.update({embeds:[embed],components: [button]})
            }
            
            if(i.customId === 'page2'){
                if(i.user.id !== interaction.user.id){
                    return await i.reply({content: `solo ${interaction.user.tag} puede usar estos botones por ahora`, ephemeral: true})
                }
                await i.update({embeds:[embed2],components: [button]})
            }

            if(i.customId === 'credits'){
                if(i.user.id !== interaction.user.id){
                    return await i.reply({content: `solo ${interaction.user.tag} puede usar estos botones por ahora`, ephemeral: true})
                }
                await i.update({embeds:[creds],components: [button]})
            }
            if(i.customId === 'disclaimer'){
                if(i.user.id !== interaction.user.id){
                    return await i.reply({content: `solo ${interaction.user.tag} puede usar estos botones por ahora`, ephemeral: true})
                }
                await i.update({embeds:[disembed],components: [button]})
            }
            
        })
        
    }
}