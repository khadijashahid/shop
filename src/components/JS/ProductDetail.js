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
        {
            
               PRODUCTS
               &&
               PRODUCTS.map((products, index) => (
                <div className='container mt-4 m-5 card-1'>
            <MDBCard style={{ maxWidth: '100%' }}>
            <MDBRow key={index} className='g-1'>
            <MDBCol md='4'>
                <MDBCardImage src={products.image} alt='...' fluid />
            </MDBCol>
            <MDBCol md='8'>
                <MDBCardBody>
                <MDBCardTitle>{products.name}</MDBCardTitle>
                <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          color2={'#ffd700'}
                          value={3} />
                
                <MDBCardText>
                  Price: ${products.price}
                </MDBCardText>
                <MDBCardText>
                   {products.description}
                </MDBCardText>
                </MDBCardBody>
            </MDBCol>
            </MDBRow>
            </MDBCard>
            
            </div>
  ))

  }
<Footer/>
</React.Fragment>


               )
               }

export default ProductDetail;