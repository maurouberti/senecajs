const Seneca = require('seneca')
const seneca = Seneca()
const MyFirstPlugin = require('./plugin')

seneca
    .use(MyFirstPlugin)
    // .act({role: 'PLUGIN', cmd: 'sum', num1: 5, num2: 6}, seneca.util.print)
    .act({role: 'PLUGIN', cmd: 'sum', num1: 5, num2: 6}, function(err, result) {
        if (err) {
            console.log(`Erro: ${err}`)
        }
        console.log(result)
    })