import React , { useState}from 'react';
import Header from './Header';
import Footer from './Footer';
import { PRODUCTS } from '../../shared/products';
import '../CSS/Product.css';
import ReactStars from 'react-stars';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText,  MDBCol } from 'mdb-react-ui-kit';


const Products = () => {
 const [selectedProduct, setSelectedProduct] = useState( PRODUCTS);

 // function for on click 
 function onProductSelect(){
   console.log("clickkeed")
   PRODUCTS && PRODUCTS.filter((product) => product.id).map((product) => product.name)
 }

// function for product rendering after select 
 const  renderProduct = (product) => {
  if (product != null)
  return(
      <MDBCard>
          <MDBCardImage top src={product.image} alt={product.name} />
          <MDBCardBody>
            <MDBCardTitle>{product.name}</MDBCardTitle>
            <MDBCardText>{product.description}</MDBCardText>
          </MDBCardBody>
      </MDBCard>
  );
else
  return(
      <div></div>
  );
}
 

 // function for react Stars
const ratingChanged = (newRating) => {
  console.log(newRating)
}

const productList = PRODUCTS && PRODUCTS.map((product) => {
  return(
    <div className='container clearfix mt-5 m-4 card '>
    <MDBCol className=''>
      <MDBCard className='h-100'key={product.id} onClick={() => onProductSelect(product)}>
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

  );
})

  return (
    <>
    <Header/>
    <div>
      {productList}
    </div><div>
        {renderProduct(selectedProduct)}
       
      </div>
      <Footer/>
      </>
   
  );
}



export default Products;