import React from "react"
import ButtonAppBar from './Header2'
import { PRODUCTS } from "../../shared/products"
import "../CSS/Product.css"
import ReactStars from "react-stars"
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
// import { experimentalStyled as styled } from '@mui/material/styles';



const Products = () => {
  const navigate = useNavigate()

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  const theme = createTheme({
    root: {
      display: "flex",
      flexGrow: 1,
  },
    palette: {
      primary: {
        main: '#5e35b1',
      },
      secondary: {
        main: '#7e57c2',
      },
   
    },
  });


  const pro = PRODUCTS.map(product => {
    return(
     
        <span className="product"
              onClick={() => navigate(`/products/${product.id}`) }> 
              
                <Card key={product.id} sx={{ maxWidth: 350, maxHeight: 500}}>
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
              </span>
    );
  });

  return (
    <React.Fragment>
      < ButtonAppBar />
      <ThemeProvider theme={theme}> 
      <div className=" container heading"> 
      <h2> LATEST PRODUCTS </h2>
      </div>
      <div className="container fluid mt-4">
        <Grid container item  direction='row'  justify="flex-start" alignItems="flex-start" spacing={{ xs:2 , md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {pro}
        </Grid>
      </div>
      </ThemeProvider>
   
    </React.Fragment>
  )
}

export default Products
