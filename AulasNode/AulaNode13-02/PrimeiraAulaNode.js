var http = require('http')

http.createServer(function(reg, res){
    res.end("mensagem direcionada")
}).listen(8081)

console.log("Servidor está ativo")