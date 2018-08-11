var http = require('http');git
var port = 8080;
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('Salut tout le monde !');
res.end();
}).listen(port);
console.log("Serveur tourne sur http://localhost:"+port);
