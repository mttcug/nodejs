var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    fs.readFile(req.url)
    res.end('hello world');
}).listen('3000');

