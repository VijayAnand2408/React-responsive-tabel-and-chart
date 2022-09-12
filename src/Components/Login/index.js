import React, { useState } from 'react'
import { Grid, makeStyles, Typography, Paper, Box, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../store/action/loginAction'
import { useNavigate  } from "react-router-dom";

const styleClasses = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
    backgroundImage: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);'
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function Login() {
  const classes = styleClasses();
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const verifyDetails = () => {
    if (name === '' || !name) return setNameError(true)
    dispatch(setUserName(name))
    navigate('/home')
  }
  return (
    <Grid className={classes.root}>
      <Box
        style={{
          height: '100vh'
        }}
      >
        <Grid container alignItems='center' justifyContent='center' maxWidth='md' style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Grid item xs={6} md={6} justifyContent="center">
            <Paper
              style={{
                height: '40vh',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography align="center" variant="h4" style={{ fontWeight: 800, paddingBottom: '25px' }} sx={{ mb: 4 }}>
                Login Form
              </Typography>
              <hr />
              <Grid className={classes.alignCenter}>
                <Box>
                  <TextField
                    value={name}
                    onChange={({ target }) => {
                      setName(target.value);
                    }}
                    error={nameError}
                    label="Enter Your Name"
                  />
                </Box>
                <Box mt={3} mb={2}>
                  <Button
                    variant="primary"
                    onClick={verifyDetails}
                    style={{
                      background: '#8A8AFF',
                      marginLeft: '15px'
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}

export default Login