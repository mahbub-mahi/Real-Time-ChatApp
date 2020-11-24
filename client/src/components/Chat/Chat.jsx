import querystring from "query-string";
import React, { useEffect, useState } from 'react';
import io from "socket.io-client";
import Infobar from "../Infobar/Infobar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;




function Chat({ location }) {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const ENDPOINT = "localhost:5000"

    useEffect(() => {
        const { name, room } = querystring.parse(location.search);
        socket = io(ENDPOINT);
        setName(name)
        setRoom(room)

        console.log(socket);
        socket.emit("join", { name, room }, () => {

        });

        return () => {
            socket.emit("disconnet");
            socket.off()
        }


    }, [ENDPOINT, location.search]);


    useEffect(()=>{
        socket.on("message", (message)=>{
            setMessages([...messages, message])
        })
    },[messages]);

    const sendMessage = (event)=>{
        event.preventDefault();

        if (message) {
            socket.emit("sendMessage", message, ()=> setMessage(""))
            
        }
        console.log(messages, message);
        

    }

    return (
        <div>
           <div>
               <Infobar room={room}/>
               <Messages messages={messages} name={name} />
               <Input message={message} sendMessage={sendMessage} setMessage={setMessage} />
           </div>
        </div>
    )
}

export default Chat


