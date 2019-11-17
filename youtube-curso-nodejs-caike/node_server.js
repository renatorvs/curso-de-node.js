
var http = require('http');


http.createServer(function(req, res) {
	res.end("Gerenciador teste rapido");
}).listen(1010);