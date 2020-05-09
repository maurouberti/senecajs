const MyFirstPlugin = function(options) {
    this.add({role: 'PLUGIN', cmd: 'sum'}, function(msg, reply) {
        reply(null, {result: msg.num1 + msg.num2})
    })
}

module.exports = MyFirstPlugin