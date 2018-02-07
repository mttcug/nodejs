var http = require('http');
var fs = require('fs');
var url =require('url');
var zlib = require('zlib');

const gzip = zlib.createGzip();
var inp = fs.createReadStream('index.html');
var out = fs.createWriteStream('index.gz');

inp.pipe(gzip).pipe(out);


http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

    fs.readFile(pathname.substr(1),function (err,data) {
        if(err){
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        }
        res.end();
    });
}).listen('3000');