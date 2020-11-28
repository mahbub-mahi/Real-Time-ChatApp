const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const {addUser, removeUser, getUser, getUserInRoom} = require("./users");

const router = require("./router");

const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app)
const io  = socketio(server);

app.use(router)


io.on('connect', (socket) => {
    socket.on("join", ({name,room}, callback)=>{

      const {error,  user } = addUser({id: socket.id,name, room});
      if (error) return callback(error);

       socket.join(user.room)

      socket.emit("message" , {user: "admin", text: `${user.name.toUpperCase()}, Welcome to the room ${user.room}`});
      socket.broadcast.to(user.room).emit("message", {user:"admin", text:`${user.name.toUpperCase()} has joined`}) 
     

      io.to(user.room).emit("roomData", {room: user.room, users: getUserInRoom(user.room)})
      callback();

    })

    socket.on("sendMessage", (message,  callback)=>{
      const user = getUser(socket.id);     

      io.to(user.room).emit("message", {user: user.name, text: message})
     
      callback()
    })

    socket.on("disconnect", () => {
      const user =removeUser(socket.id)

      if(user){
        io.to(user.room).emit("message", {user: "admin", text: `${user.name.toUpperCase()} has left`})
        io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room)});}
  })
});

server.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))