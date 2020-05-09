const seneca = require('seneca')()
const express = require('express')()
const web = require('seneca-web')
const adapter = require('seneca-web-adapter-express')
const routes = require('./express-router')

// var bodyParser = require('body-parser');
// express.use(bodyParser.json());
// express.use(bodyParser.urlencoded({ extended: true }));

seneca
    .client()
    .use(web, {
        routes: routes,
        adapter: adapter,
        context: express 
    })
    .ready(() => {
        const server = seneca.export('web/context')()
        server.listen(9000, () => console.log('Seneca WebServer 9000'))
    })

seneca.add({role: 'TEST', action: 'mult'}, function(msg, reply) {
    console.log(msg.args)
    // reply(null, {result: msg.args.body.num1 * msg.args.body.num2}) // POST ou PUT (Habilitar bodyParser)
    // reply(null, {result: msg.args.params.num1 * msg.args.params.num2})
    reply(null, {result: msg.args.query.num1 * msg.args.query.num2})
    // reply(null, {result: msg.num1 * msg.num2})
})
