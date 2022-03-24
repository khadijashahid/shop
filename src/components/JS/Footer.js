import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
         <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3'>
         Copyright:{' '} &copy;
        <a className='text-dark' href='https://mdbootstrap.com/'>
          ReactShop
        </a>
      </div>
    </MDBFooter>
        
    </div>
  )
}

export default Footer;