import querystring from "query-string";
import React, { useEffect, useState } from 'react';
import io from "socket.io-client";
import "../Chat/Chat.css";
import Infobar from "../Infobar/Infobar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;

  


function Chat({ location }) {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const ENDPOINT = "localhost:5000";
    useEffect(() => {
        const { name, room } = querystring.parse(location.search);
        socket = io(ENDPOINT);
        setName(name)
        setRoom(room)
        
        socket.emit("join", { name, room }, (error) => {
        if(error) {
        alert(error);
        }
        });
    },[ENDPOINT, location.search]);


    useEffect(()=>{
        socket.on("message", (message)=>{
            setMessages(messages => [...messages, message])
        })
    },[]);

    const sendMessage = (event)=>{
        event.preventDefault();

        if (message) {
            socket.emit("sendMessage", message, ()=> setMessage(""))
        }
    }

    return (
        <div>
           <div className="main">
               <Infobar room={room}/>
               <Messages messages={messages} name={name} />
               <Input message={message} sendMessage={sendMessage} setMessage={setMessage} />
           </div>
        </div>
    )
}

export default Chat


