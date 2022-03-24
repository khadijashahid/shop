import React from 'react';
import Header from './Header';
import { PRODUCTS } from '../../shared/products';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Products = ( products ) => {
  return (
    <div>
        <Header/>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={products.image}
            alt={products.name}
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle> {products.title} </MDBCardTitle>
            <MDBCardText>
             {products.description}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}


export default Products;