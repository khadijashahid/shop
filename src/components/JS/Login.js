import React from 'react';
import {
    MDBInput,
    MDBBtn,
  } from 'mdb-react-ui-kit';
  import '../CSS/Login.css';

const Login = () => {
  return (
    <div className='container'>
    <form className='square border border-0'>
        <h2 className='form-heading'> Account Login </h2>
      <MDBInput className='mb-4 mt-4 inp' type='email' id='form2Example1' label='Email address' />
      <MDBInput className='mb-4 mt-4 inp' type='password' id='form2Example2' label='Password' />
      <MDBBtn type='submit' className='mb-4 ' block>
        Login
      </MDBBtn>
      
    </form>
    </div>
  )
}

export default Login