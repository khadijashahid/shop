import React from 'react';

  import '../CSS/Login.css';
  import ButtonAppBar from './Header2'
import {Button, InputLabel, TextField} from '@mui/material';


const Login = () => {
  return (
    
    <>
    <ButtonAppBar />
    
   <div className='container'>
     <div className='row justify-content-md-center'>
       <div className='px-4 card mt-4 '> 
       <div className='card-header'> Account Login 
       </div>
       <div className='card-body'> 
       <form className='form'>
             <InputLabel className='inp'> Email:  </InputLabel>
             
               <TextField fullWidth id="outlined-basic" label="enter your Emial"/> 
               <InputLabel className='inp' > Password: </InputLabel>
             <TextField fullWidth id="outlined-basic" label="enter your password"/>
           </form>
           <Button fullWidth variant="contained"> Sign In</Button>
       </div>
       </div>      
     </div>
   </div>

</>
  )
}

export default Login