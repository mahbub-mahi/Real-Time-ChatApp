import React from 'react';

function Message({message:{user, text} , name}) {
    let sendByUser = false;
    const trimedName = name.trim().toLowerCase();
    if (user ===trimedName) {
        sendByUser =true;
    }
    return (
      sendByUser 
      ? 
      (
          <div>
              <p>{trimedName}</p>
              <h3> {text}</h3>
          </div>

      ) 
      : 
      (
          <div>
              <p style={{color:"red"}}>{user}</p>
              <h3 style={{color:"red"}}>{text}</h3>
          </div>

      )
    )
}

export default Message
