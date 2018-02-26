var io = require('socket.io-client');
var socket = io.connect('http://18.221.30.192:80', {reconnect: true});

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected!');
});
socket.emit('CH01', 'me', 'test msg');