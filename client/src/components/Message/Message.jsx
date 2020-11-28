import React from 'react';
import "../Message/Message.css";


function Message({message:{user, text} , name}) {
    let sendByUser = false;
    const trimedName = name.trim().toLowerCase();
    if (user ===trimedName) {
        sendByUser =true;
    }

    if (user === "admin" ) {
        return(
            <div>
               <div className="admin_panel" >
                 <p className="admin_msg">{text}</p>
                </div>
            </div>
        )        
    }
    return (
      sendByUser 
      ? 
      (
            <div className="outgoing_msg">
                
              <div className="sent_msg">
                <p>{text}</p>
                <span className="myName"><b>{trimedName.toUpperCase()}</b></span> </div>
             
            </div>  
      ) 
      : 
      (
         
            <div className="incoming_msg">
              <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> 
              </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p> {text}</p>
                  <span className="senderName"><b>{user.toUpperCase()}</b></span></div>
              </div>
            </div>


      )
    )
}

export default Message
