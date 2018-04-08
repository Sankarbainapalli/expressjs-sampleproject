
var express = require('express');
var app = express();
var fs = require('fs');
const port = 8080;

app.get('/',function(request,response){

  response.writeHead(200,{"Content-Type":"text/html"});

  response.write(fs.readFileSync("./public/index.html"));
 
  response.end();
})
app.use(express.static(__dirname + '/public'));
console.log("Server Running At");
var io = require('socket.io').listen(app.listen(port));
io.sockets.on("connection",function(socket){
    socket.emit("Start_Chat");
})