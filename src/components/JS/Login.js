import React from 'react';
import '../CSS/Login.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Button, InputLabel, TextField, Toolbar} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5e35b1',
    },
    secondary: {
      main: '#7e57c2',
    },
  },
});


const Login = () => {
  return (
    <>
  
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
    <div className='container box'>
     <div className='row justify-content-md-center'>
       <div className='px-4 card mt-4'> 
       <div className='card-header'> Account Login 
       </div>
       <div className='card-body'> 
       <form className='form'>
             <InputLabel fullWidth className='inp'> Email:  </InputLabel>
             
               <TextField  id="outlined-basic" label="enter your Emial"/> 
               <InputLabel className='inp' > Password: </InputLabel>
             <TextField fullWidth id="outlined-basic" label="enter your password"/>
           </form>
           <Button fullWidth className='btnSign' variant="contained"> Sign In</Button>
       </div>
       </div>      
     </div>
   </div>
    </ThemeProvider>
  
</>
  )
}

export default Login