import React from "react"
import { PRODUCTS } from "../../shared/products"
import ReactStars from "react-stars"
import ButtonAppBar from './Header2'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';


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
    <ButtonAppBar/>
    <Button variant="contained"> BACK </Button>
    
   <CardMedia
        key={thisProduct.id}
        component="img"
        sx={{ width: 151 }}
        image={thisProduct.image}
        alt={thisProduct.name}
      />
  
   <Card sx={{ display: 'flex' }} onClick={() => navigate(`/productdetail/${thisProduct.id}`)}  >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {thisProduct.name}
          </Typography>

          <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={'#ffd700'}
                      value={3} />
       
        </CardContent>
        <Typography component="div" variant="p">
          Price: ${thisProduct.price}
          </Typography>
          <Typography component="div" variant="p">
          {thisProduct.description}
          </Typography>
      </Box>
 
    </Card>


</React.Fragment>
  );
  
}

export default ProductDetail