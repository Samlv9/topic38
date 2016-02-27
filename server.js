var http = require('http');
var port = process.env.port || 1337;
var StaticServer = require('node-static').Server;
var fileServer   = new StaticServer("./wwwroot");


http.createServer(function ( request, response ) {
    request.addListener('end', function () {
        /// 创建静态文件服务器。
        fileServer.serve(request, response);
    })
    .resume();
}).listen(port);