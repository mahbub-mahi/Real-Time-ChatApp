import React from 'react';
import close from "../Icons/close.png";
import "../Infobar/Infobar.css";

function Infobar({room}) {
    return (
        <div className="container2">
            <i className="fa fa-circle"></i>
            <h1 style={{fontFamily:"Sansita Swashed"}}>{room}</h1>
            <a href="./"><img className={"close"} src={close} alt={"Close"}></img></a>
        </div>
    )
}

export default Infobar
