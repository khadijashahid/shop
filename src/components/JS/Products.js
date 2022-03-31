import React from "react"
import ButtonAppBar from './Header2'
import { PRODUCTS } from "../../shared/products"
import "../CSS/Product.css"
import ReactStars from "react-stars"
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom"
import { Stack } from "@mui/material"


const Products = () => {
  const navigate = useNavigate()
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  const pro = PRODUCTS.map(product => {
    return(
    
      <div className="product"
      onClick={() => navigate(`/products/${product.id}`) }> 
      
   
        <Card key={product.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"  
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        color2={"#ffd700"}
                        value={3}
                      />

        <Typography variant="body2" color="text.secondary">
        ${product.price}
        </Typography>
      </CardContent>
    </Card>
   
      </div>
     
    );
  });

  return (
    <React.Fragment>
      < ButtonAppBar />
      <Stack direction='row' spacing ={2}>
     {pro}
     </Stack>
    </React.Fragment>
  )
}

export default Products