const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const {addUser, removeUser, getUser, getUserInRoom} = require("./users");

const app = express();

const PORT = process.env.PORT || 5000;

const router = require("./router");

const server = http.createServer(app)
const io  = socketio(server);


io.on('connection', (socket) => {
    console.log("socket conntected");

    socket.on("join", ({name,room}, callback)=>{

      const {error,  user } = addUser({id: socket.id,name, room});
      if (error) return callback(error);

      socket.emit("message" , {user: "admin", text: `${user.name}, Welcome to the room ${user.room}`});
      socket.broadcast.to(user.room).emit("message", {user:"Admin", text:`${user.name} has joined`}) 
      socket.join(user.room)
      callback();

    })

    socket.on("sendMessage", (message,  callback)=>{
      const user = getUser(socket.id);
      console.log(user);
      

      io.to(user.room).emit("message", {user: user.name, text: message})

      callback()
    })

    socket.on("disconnect", () => {
    console.log("user just left!!!"); 
  });
    
});


app.use(router)


server.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))