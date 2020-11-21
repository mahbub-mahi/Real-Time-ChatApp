const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();

const PORT = process.env.PORT || 5000;

const router = require("./router");

const server = http.createServer(app)
const io  = socketio(server);

io.on('connection', socket => {
    console.log("socket conntected");
    socket.on("disconnect", () => {
    console.log("user just left!!!"); 
  });
    
});


app.use(router)


server.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))