const Discord = require('discord.js')
const Prefix = require('../Modelos/Prefix');
module.exports = async (client, msg) => {

    if(!msg.guild) return;
        let ExistsPrefix = await Prefix.findOne({ guildId: msg.guild.id });
        if(!ExistsPrefix) {
            prefix = "r?"
        } else {
            prefix = ExistsPrefix.prefix;
        }
   const embed = new Discord.MessageEmbed()
   .setTitle('<:RBSaluda:943584973473087498> > ¡Hola soy Rengoku!')
   .addField('Funcion:', 'Soy un bot lleno de diversion para divertir a todos los servidores nwn', false)
   .addField('¿Quieres saber mis comandos? Usa:', `r?help`, false) 
   .addField('Desarolladores:', '៚ By duck ツ#5514 | 513755184049029130\n៚ Sensei Lorenz#5148 | 744141271249059880', false)
   .addField('Prefix:', 'r?', false)
   .setColor(0xff4040)
    if(!msg.guild) return;
    if(msg.author.bot) return;
    if(msg.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
     msg.reply({ embeds: [embed] })
    }
    if(!msg.content.startsWith(prefix)) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const comando = args.shift().toLowerCase()
    if(!comando) return msg.reply('¡Haz encontrado mi prefix! ahora usa el comando `help`')
    let cmd = client.commands.find( c => c.name === comando || c.alias && c.alias.includes(comando))
    if(!cmd){
        return msg.reply('Al parecer escribiste mal el comando o no existe')
    }else{
        try{
            await cmd.execute(client, msg, args)
        }catch(e){
					console.log(e)
            msg.reply('Ocurrio un error inesperado: \n' + `\`\`\`js\n ${e} \n\`\`\``)
        }
    }
    
}