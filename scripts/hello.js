const seneca = require('seneca')()

seneca.add({role: 'TEST', cmd: 'hello'}, (msg, reply) => {
    console.log(`ADD: ${JSON.stringify(msg)}`)
    reply(null, { msg: msg.stringHello })
})

seneca.act({role: 'TEST', cmd: 'hello', stringHello: 'World'}, function(err, result) {
    if (err) {
        console.log(`Erro: ${err}`)
    }
    console.log(`Objeto: ${JSON.stringify(result)}`)
    console.log(`Sucesso: ${result.msg}`)
})
