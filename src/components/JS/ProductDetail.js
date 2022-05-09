import React from "react"
import { PRODUCTS } from "../../shared/products"
import ReactStars from "react-stars"
import ButtonAppBar from './Header2'
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import '../CSS/Detailproduct.css'
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { Table, TableCell, TableRow, TableContainer, Paper, TableBody } from "@mui/material";


const ProductDetail = () => {
  // Find the product with this id and render.
  const { id } = useParams()
  const thisProduct = PRODUCTS.find(prod => prod.id === id)
  console.log(id, "prod Id")
  const navigate = useNavigate();


  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: '#5e35b1',
      },
      secondary: {
        main: '#7e57c2',
      },
    },
  });
 

  return (
    <React.Fragment>
    <ButtonAppBar/>
    <ThemeProvider theme={theme}>
    <div className=" btnBack container">
    <Button variant="contained" > BACK </Button>
    </div>
      <div className="container box">
      <CardMedia
        key={thisProduct.id}
        component='img'
        sx={{ width: 550}}
        image={thisProduct.image}
        alt={thisProduct.name}
      />
       <Box className="box data" sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h5">
        <strong>
        {thisProduct.name}
        </strong>
         
          </Typography>
          <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={'#ffd700'}
                      value={3} /> 
        <Typography  variant="p">
          <strong>  Price: ${thisProduct.price}</strong>
         
          </Typography>
          <Typography variant="p">
          {thisProduct.description}
          </Typography> 
          </Box>
          
          {/* add to cart  */}
          <div className="cartbox">
            <TableContainer  component={Paper}>
                <Table aria-label="spanning table">
                  <TableBody>
                    {/* no 1 item  */}
                    <TableRow>
                      <TableCell align="left" >
                        Price: 
                      </TableCell>
                      <TableCell align="right">
                        ${thisProduct.price}
                      </TableCell>
                    </TableRow>

                   {/* no 2 item */}
                    <TableRow>
                      <TableCell align="left" >
                        Stock 
                      </TableCell>
                      <TableCell align="right">
                        {thisProduct.countInStock}
                      </TableCell>
                    </TableRow>

                    {/* no3 item  */}
                    <TableRow>
                      <TableCell align="left">
                        Qty: 
                      </TableCell>
                      <TableCell align="right">
                         <Button>
                           <ButtonGroup>
                          <Button> 1</Button>
                          <Button>  <ArrowDropDownIcon/> </Button>
                           </ButtonGroup>
                          
                         </Button>
                      </TableCell>
                    </TableRow>
                
                    {/* button  */}
                  
                    <Button variant="contained" size='small' sx={{ minWidth: '110px', margin:'10px', textTransform:'none'}} onClick={() => navigate(`/productdetail/${thisProduct.id}`)}> Add to Cart </Button>
                           
                </TableBody>
                </Table>
              </TableContainer>
           
          </div>

      </div>
   
          </ThemeProvider>
</React.Fragment>
  );
  
}

export default ProductDetail