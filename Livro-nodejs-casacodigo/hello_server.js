var http = require('http');
var atendeRequisicao = function(request, response) { 
	response.writeHead(200, {"Content-Type": "text/html"}); response.write("<h1>Hello rodando World!</h1>"); 
	response.end(); 
} 

var server = http.createServer(atendeRequisicao);

var servidorLigou = function() { 
	console.log('Servidor Hello World rodandodddddddddd!'); 
} 

server.listen(3000, servidorLigou);
