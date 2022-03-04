const {readdirSync} = require('fs')
module.exports = (client) => {
try{
    readdirSync('./Comandos').forEach(subCarpeta => {
        const carpetas = readdirSync(`./Comandos/${subCarpeta}`).filter(file => file.endsWith('.js'))
        for(let archivo of carpetas){
            let file = require(`../Comandos/${subCarpeta}/${archivo}`)
            client.commands.set(file.name, file)
        }
    })
    readdirSync('./Slash').forEach(subCarpeta => {
        const carpetas = readdirSync(`./Slash/${subCarpeta}`).filter(file => file.endsWith('.js'))
        for(let archivo of carpetas){
            let file = require(`../Slash/${subCarpeta}/${archivo}`)
            client.slash.set(file.data.name, file)
        }
    })

}catch(e){
    console.error(e)
}
}
