// Initialize Modules
const net = require('net');
const io = require('socket.io-client');

// Start TCP Server for MCU
const server = net.createServer((client) => {
    // On Scale Connected, start WebSocket connection to web app server
    console.log('Scale Connected!');
    let socket = io.connect('http://18.221.30.192:80', {reconnect: true});
    socket.on('connect', function (socket) {
        console.log('Connected to front-end server!');
    });

    // MCU Connection Events
    client.on('data', function (chunk) {
        console.log(chunk.toString());
    });
    client.on('end', () => {
        console.log('Scale Disconnected!');
        socket.close();
    });
});

// If error occurs, handle accordingly
server.on('error', (err) => {
    throw err;
});

// Listen for MCU
server.listen(4000, () => {
    console.log('TCP Server Listening on Port 4000');
});