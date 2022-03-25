import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { PRODUCTS } from '../../shared/products';
import '../CSS/Product.css';
import ReactStars from 'react-stars';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText,  MDBCol } from 'mdb-react-ui-kit';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';

const Products = () => {
  
const ratingChanged = (newRating) => {
  console.log(newRating)
}

const onProductSelect=() => {
  console.log("say Hi");
  <Routes>
    <Route path='productdetail' element={<ProductDetail/>}>
    </Route>
  </Routes>
}

  return (
    <React.Fragment>
    
        <Header />
        {
          
          PRODUCTS
          &&
          PRODUCTS.map((product, index) => {
            return (
              <div className='container clearfix mt-5 m-4 card '>
                <MDBCol key={index} className=''>
                  <MDBCard className='h-100' onClick={onProductSelect} >
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
         
              </div>
            )
          })
        }
        <Footer/>
    
    </React.Fragment>
  )
}



export default Products;