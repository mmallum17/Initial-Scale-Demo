let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket){
    console.log('connection');

    socket.on('CH01', function (from, msg) {
        console.log('MSG', from, ' saying ', msg);
    });

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        socket.broadcast.emit('chat message', msg);
        //io.emit('chat message', msg);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

});

http.listen(80, function () {
    console.log('listening on *:80');
});