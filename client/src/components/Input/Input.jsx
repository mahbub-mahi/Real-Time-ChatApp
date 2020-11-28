import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import React from 'react';
import "../Input/Input.css";

function Input({message, setMessage, sendMessage }) {
const style = {
  background: 'linear-gradient(45deg, #16b7c9 30%, #0384fc 90%)',
  color: 'black',
  letterSpacing:"2px",
  fontSize:"17px",
  fontFamily: "'Oswald', 'sans-serif'"
  };
    return (
        <div className="container3">
            <input
            className="Input"
            placeholder={"Type Here"}
               value={message}
               onChange={(event)=> setMessage(event.target.value)}
               onKeyPress={(event) => event.key ==="Enter" ? sendMessage(event) : null}
               ></input>
               <Button
               variant="contained" color="secondary"
                endIcon={<Icon style={{marginLeft:"15px"}}>send</Icon>}
                style={style}
               onClick={(event)=> sendMessage(event)}
               >Send</Button>
        </div>
    )
}

export default Input
