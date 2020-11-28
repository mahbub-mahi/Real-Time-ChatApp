import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../Join/Join.css";


function Join() {

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 const classes = useStyles() 
    const [name, setName]  = useState("");
    const [room, setRoom]  = useState("")
    return (
    <div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
           Welcome To The Chat Room
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
           onChange={(event)=> setName(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="User Name"
            name="name"
            autoFocus
          />
          <TextField
          onChange={(event)=> setRoom(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Room"
            label="Room"
            type="text"
            id="password"
          />
          <Link onClick={event => (!name ||!room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
          </Link>
         
        </form>
      </div>
      
    </Container>
      </div>
    )
}

export default Join
