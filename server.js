var express=require('express'),
io=require('socket.io');
var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server);

server.listen(8080);

io.sockets.on('connection', function (socket) {
  socket.emit('chat', { msg: 'Welcome<br/>' });
  socket.on('chat', function (data) {
	 // console.log(data);
     socket.broadcast.emit('chat', data );
  })
});