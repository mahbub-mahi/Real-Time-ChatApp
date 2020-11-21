import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Join() {
    const [name, setName]  = useState("");
    const [room, setRoom]  = useState("")
    return (
        <div>
            <h1>Join</h1>
            <input placeholder="Name" type="text" onChange={(event)=> setName(event.target.value)}></input><br/><br/>
            <input placeholder="Room" type="text" onChange={(event)=> setRoom(event.target.value)}></input><br/><br/>
            <Link onClick={event => (!name ||!room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className="button" type="submit">
                Sign In
            </button></Link>
        </div>
    )
}

export default Join
