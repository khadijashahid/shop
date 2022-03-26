import React from 'react';
import { PRODUCTS } from '../../shared/products';
import ReactStars from 'react-stars';
import Header from './Header';
import Footer from './Footer';
import '../CSS/Detailproduct.css';
import {  MDBBtn ,MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const ProductDetail = () => {
    const ratingChanged = (newRating) => {
  console.log(newRating)
}
  return (
      
    <React.Fragment>
        <Header/>
       <MDBBtn  className='text-dark' color='light'> BACK </MDBBtn>
       
<Footer/>
</React.Fragment>


               )
               }

export default ProductDetail;