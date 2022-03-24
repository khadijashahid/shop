import React from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink, 
    MDBNavbarBrand,
  } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
          <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
      <MDBNavbarBrand href='#'> ReactShop </MDBNavbarBrand>
        <MDBNavbarNav className='d-flex flex-row'>
          <MDBNavbarItem className='me-3 me-lg-0'>
              <Link to='/Login'> 
              <MDBNavbarLink href='/Login'> 
              <MDBIcon fas icon='shopping-cart' /> CART
            </MDBNavbarLink>
              </Link>
          
          </MDBNavbarItem>
          <MDBNavbarItem className='me-3 me-lg-0'>
              <Link to='/Footer'>
              <MDBNavbarLink href='/Footer'>
            <MDBIcon fas icon="male" /> SIGN IN
            </MDBNavbarLink>
              </Link>
          
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
    </React.Fragment>

  );
}
    
export default Header;
