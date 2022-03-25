import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { PRODUCTS } from '../../shared/products';
import '../CSS/Product.css';
import ReactStars from 'react-stars';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Products = () => {
  
const ratingChanged = (newRating) => {
  console.log(newRating)
}
  return (
    <React.Fragment>
    
        <Header />
        {
          
          PRODUCTS
          &&
          PRODUCTS.map((product, index) => {
            return (
              <div className='container clearfix'>
              <MDBRow key={index} className=' row-cols-1 row-cols-md-3 g-4' >
                <MDBCol className=''>
                  <MDBCard className='h-100 '>
                    <MDBCardImage
                      src={product.image}
                      alt={product.name}
                      position='top'
                    />
                    <MDBCardBody>
                      <MDBCardTitle> {product.name} </MDBCardTitle>
                      <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          color2={'#ffd700'}
                          value={3} />
                      <MDBCardText>
                        ${product.price}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              </div>
            )
          })
        }
        <Footer/>
    
    </React.Fragment>
  )
}



export default Products;