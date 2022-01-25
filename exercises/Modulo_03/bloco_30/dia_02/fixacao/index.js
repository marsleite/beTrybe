const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  console.log(`Usuario conectado. ID: ${socket.id}`);

  socket.emit('Ola', 'Seja bem vindo!');
  
  socket.on('ping', () => {
    console.log(`${socket.id} emitiu um ping`);
    io.emit('pong', `${socket.id} respondeu pong`);
  });
});


app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});