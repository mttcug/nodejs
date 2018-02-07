var http = require('http');

var option = {
    host:'localhost',
    port:'3000',
    path:'/index.html'
}

var callback = function (res) {
    var body='';
    res.on('data',function (data) {
        body += data;
    })

    res.on('end',function (data) {
        console.log('data');
    })
}

var req = http.request(option,callback);
req.end();