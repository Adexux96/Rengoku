const Discord = require('discord.js')
const Bloquser = require("../../Modelos/Bloquser");
module.exports = {
    name: "bloquser",
    alias: ["ggez", "bloqueo", "zzz"],
    description: "Comando solo para creadores.",
    usage: "bloquser <ID> <Razón>",

execute: async(client, message, args) => {
    
const devs = ["513755184049029130", "744141271249059880", "947922047118499910"]
if (!devs.includes(message.author.id)) {     
return message.channel.send( { content: 'Solo mis creadores pueden usar esto...' } )
        
} else {
const id = args[0];
const razon = args.slice(1).join(" ");
if(!id) return message.reply( { content: 'Coloca una ID' } )
if(!razon)  {
return message.reply( { content: 'Coloca una razon xd' } )    
} else {
const exists = await Bloquser.findOne({
userId: id
});
if(exists) {
 return message.channel.send({ content: "<:RBError:943584989021364326> Ese usuario ya está bloqueado" })
}
client.users.fetch(id).then(async u => {
const bloquser = new Bloquser({
userId: id,
razon: razon
});
await bloquser.save();
message.reply( { content: `Perfecto, \`${u.username}\` fue bloqueado con exito, razón: \`${razon}\``} )
}).catch(e => { return message.channel.send({ content: "<:RBError:943584989021364326> No existe ese usuario." }) })
            }
        }
    }
}
