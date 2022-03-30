import React from "react"
import Header from "./Header"
import { PRODUCTS } from "../../shared/products"
import "../CSS/Product.css"
import ReactStars from "react-stars"
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit"
import { useNavigate } from "react-router-dom"

const Products = () => {
  const navigate = useNavigate()
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  const pro = PRODUCTS.map(product => {
    return(
      <div
              className=" container-fluid product"
              onClick={() => navigate(`/products/${product.id}`)}
            >
                    <span>
                  <MDBCardGroup key={product.id}  className="cards" >
                    <MDBRow className="">
                      <MDBCol className="">
                  <MDBCard className="h-100 ">
                    <MDBCardImage
                      src={product.image}
                      alt={product.name}
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardTitle> {product.name} </MDBCardTitle>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        color2={"#ffd700"}
                        value={3}
                      />
                      <MDBCardText>${product.price}</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                  </MDBRow>
                 
                  </MDBCardGroup>
                  </span>   
            </div>
    );
  });

  return (
    <React.Fragment>
      <Header />
     {pro}
    </React.Fragment>
  )
}

export default Products