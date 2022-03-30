import React from "react"
import { PRODUCTS } from "../../shared/products"
import ReactStars from "react-stars"
import Header from "./Header"

import {
  MDBBtn,
} from "mdb-react-ui-kit"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const ProductDetail = () => {
  // Find the product with this id and render.
  const { id } = useParams()
  const thisProduct = PRODUCTS.find(prod => prod.id === id)
  console.log(id, "prod Id")
  const navigate = useNavigate();


  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

  return (
    <React.Fragment>
    <Header/>
   <MDBBtn  className='text-dark' color='light'> BACK </MDBBtn>
   <div className="" >
     <image src={thisProduct.image} ></image> 
   </div>
   <div className="" onClick={() => navigate(`/productdetail/${thisProduct.id}`)}>
     <h3>
       {thisProduct.name}
     </h3>
     <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={'#ffd700'}
                      value={3} />
      <h4> 
       Price :$ {thisProduct.price}
      </h4>
      <p> { thisProduct.description}</p>
   </div>



</React.Fragment>
  );
  
}

export default ProductDetail