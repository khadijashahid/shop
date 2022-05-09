import React, { useReducer } from 'react';
import {PRODUCTS} from '../../shared/products';
import { useParams } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import ButtonAppBar from './Header2';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import '../CSS/Cart.css';
import {  Box, Typography, styled, ButtonGroup, Button, Card, CardContent, Table, TableContainer, TableRow, TableCell} from '@mui/material';


const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
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

  function cartReducer(state, action) {
    switch(action.type) {
      case 'add':
        return [...state, action.thisProduct];
      case 'remove':
        const productIndex = state.findIndex(item => item.name === action.thisProduct.name);
        if(productIndex < 0) {
          return state;
        }
        const update = [...state];
        update.splice(productIndex, 1);
        return update;
      default:
        return state;
    }
  }


const Cart = () => {
    const [cart, setCart] = useReducer( cartReducer , []);
    const { id } = useParams()
    const thisProduct = PRODUCTS.find(prod => prod.id === id)
    const Img = styled('img')({
      display:'inline',
      width: '150px',
      height: '150px',
    });


    function getTotal(cart) {
      const total = cart.reduce((totalCost,item) => totalCost+item.price, 0)
        return total.toLocaleString(undefined, currencyOptions)
      }
      function add(thisProduct) {
  
        setCart({thisProduct, type:'add'});
       
      }

      function remove(thisProduct) {
 
        setCart({ thisProduct, type: 'remove' });
      
      }
 
  return (
   <>
   <ThemeProvider  theme={theme}>
  <ButtonAppBar/>
      {/* Heading  */}
  <div className='container heading'>
      <h2> SHOPPING CART</h2>
      <Typography variant='subtitle2'>
                 <hr/>
      </Typography>
 </div>
 <div className='container-fluid box '>
         <Img alt={thisProduct.name} src={thisProduct.image}/>
      
     {/* horizontal description */}
  <p className='hor'>
     <p className='description'> {thisProduct.name}</p>
     <p className='description'>$ {thisProduct.price }</p>
     <p >
       <Button>
         <ButtonGroup>
           <Button>
            {cart.length}
           </Button>
           <Button>
              <ArrowDropDownIcon  aria-label="increase"
                onClick={() => {
                  add(thisProduct)
                }} />

           </Button>
         </ButtonGroup>
       </Button>         
               <Button
                 aria-label="reduce"
                 onClick={() => {
                  remove(thisProduct)
                 }}
               >
                 <DeleteIcon fontSize='medium'/>
               </Button>
     </p>
    
     </p>
    {/* subtotal item */}
            <Card sx={{marginLeft: '30px'}}>
             <CardContent>
               <Typography variant='div' component='h4'>
                 {""}
                 Subtotal Items:
                 ({cart.length})
               </Typography>
               <Typography variant='subtitle2'>
                 <hr/>
               </Typography>
                 <TableContainer  component={Box}>
                   <Table aria-label="spanning table">
                     <TableRow>
                      <TableCell align="left">     
                     Subtotal Price:
                       </TableCell>
                       <TableCell align="right"> 
                     ${thisProduct.price}
                       </TableCell>
                     </TableRow>
                     {/* 2 row */}
                     <TableRow>
                      <TableCell align="left">     
                  Discount:
                       </TableCell>
                       <TableCell align="right"> 
                  0%
                       </TableCell>
                     </TableRow>
                     {/* 3 row */}
                     <TableRow>
                      <TableCell align="left">     
                    Total Price:
                       </TableCell>
                       <TableCell align="right"> 
                       ${getTotal(cart)}
                       </TableCell>
                     </TableRow>
                   </Table>
                   
                 </TableContainer>      
           <Button className='btn checkout' variant='contained'> Proceed to checkout</Button>         
             </CardContent>
            </Card>
 </div>
    </ThemeProvider>
   </>
    
  )
}

export default Cart;