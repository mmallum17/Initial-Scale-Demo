var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket){
    console.log('connection');

    socket.on('CH01', function (from, msg) {
        console.log('MSG', from, ' saying ', msg);
    });

});

http.listen(80, function () {
    console.log('listening on *:80');
});