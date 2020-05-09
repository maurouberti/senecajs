const Seneca = require('seneca')
const seneca = Seneca()

seneca.add({role: 'ACT', cmd: 'ping'}, (msg, reply) => {
    console.log('===================')
    reply(null, { msg: 'PONG' })
})

seneca.listen({type: 'http', port: 9000})

// http://localhost:9000/act?role=ACT&cmd=ping

// curl -X GET -H 'Content-Type: application/json' -d '{"role":"ACT","cmd":"ping"}' http://localhost:9000/act
