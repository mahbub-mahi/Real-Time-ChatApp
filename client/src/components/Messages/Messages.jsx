import React from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";
import "../Messages/Messages.css";

function Messages({messages , name}) {
  return(
       <ScrollToBottom >
         <div className="container4">
           {messages.map((message, i)  => <div key={i}>
             <Message message={message} name={name} /></div>
           )} 
           </div>
       </ScrollToBottom>
   
  )}

export default Messages
