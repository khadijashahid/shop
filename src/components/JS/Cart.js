import React, { useReducer } from 'react';
import {PRODUCTS} from '../../shared/products';
import { useParams } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import ButtonAppBar from './Header2';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import '../CSS/Cart.css';
import { Grid, ButtonBase,Box, Typography, styled, ButtonGroup, Button, Card, CardContent} from '@mui/material';


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
      margin: 'auto',
      display:'block',
      maxWidth: '100%',
      maxHeight: '100%',
    });
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(3),
    
    }));

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
  <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    />
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateAreas: `"header header header header"
        "main main . sidebar"
        "footer footer footer footer"`,
        }}
      />
      {/* Heading  */}
  <div>
      <Box sx={{gridArea: 'header' }}> <h2> SHOPPING CART</h2></Box>
 </div>

  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
          <Box sx={{ gridArea: 'main', display:'flex' }}>
      
      <div className='container '>
      <Grid container spacing={5}  >
     <Grid item >
       <ButtonBase sx={{ width: 150, height:128 }}>
         <Img alt={thisProduct.name} src={thisProduct.image} />
       </ButtonBase>
     </Grid>

     {/* horizontal description  */}
    <Grid item xs={12} wrap-xs-nowrap>
      <Grid item xs container direction="column" spacing={2}> 
      <Grid item xs> 
      
      <Typography gutterBottom variant="subtitle1" component="p">
            {thisProduct.name}
           </Typography>
           <Typography  gutterBottom variant="body" component='p'>
            $ {thisProduct.price}
           </Typography>
           <ButtonGroup>
             {cart.length} 
               <Button  className='p-2 m-1'
                aria-label="increase"
                variant='outlined'
                onClick={() => {
                  add(thisProduct)
                }}>
                 <AddIcon fontSize='small'/>
               </Button> 
               <Button className='p-2 m-1'
                 aria-label="reduce"
                 variant='outlined'
                 onClick={() => {
                  remove(thisProduct)
                 }}
               >
                 <DeleteIcon fontSize='small'/>
               </Button>
             </ButtonGroup>
           
           
      </Grid>
      </Grid>
    </Grid>
    </Grid>
      </div>
  </Box>
          </Item>
        </Grid>
{/* side menu */}
        <Grid item xs={4}>
          <Item>
            <Card>
             <CardContent>
               <Typography variant='div' component='h4'>
                 {""}
                 Subtotal Items
                 ({cart.length})
               </Typography>
              
               <Typography variant='subtitle2'>
                 <hr/>
               </Typography>
               <Grid container>
                 <Grid item xs={11} sm={11} md={11} lg={11}>
                   <Typography variant='body2' component='div'>
                     Subtotal Price:
                   </Typography>
                 </Grid>
                 <Grid item xs={1} sm={1} md={1} lg={1}>
                   <Typography component='div'>
                     ${thisProduct.price}
                   </Typography>
                 </Grid>
                 <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body2" component="div">
              Discount: 
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography  component="div">
              0%
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Total:
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography  component="div">
              ${getTotal(cart)}
            </Typography>
          </Grid>
           <Button variant='contained'> Proceed to checkout</Button>
               </Grid>
             </CardContent>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
   </>
    
  )
}

export default Cart;