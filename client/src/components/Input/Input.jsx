import React from 'react'

function Input({message, setMessage, sendMessage }) {
    return (
        <div>
            <input 
               value={message}
               onChange={(event)=> setMessage(event.target.value)}
               onKeyPress={(event) => event.key ==="Enter" ? sendMessage(event) : null}
               ></input>
               <button
               className="button"
               onClick={(event)=> sendMessage(event)}
               >Send</button>
        </div>
    )
}

export default Input
