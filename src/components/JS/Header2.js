import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ThemeProvider } from '@emotion/react';

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
export default function ButtonAppBar() {

  return (
    <ThemeProvider theme={theme}>   

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component='div' sx={{ flexGrow: 1 , marginLeft: '250px' ,fontSize:'25px'}}>
            ReactShop
          </Typography>
          <ShoppingCartIcon/>CART 
        <div className='m-2'></div>     
        <PersonIcon/>LOGIN 
  
        </Toolbar>
      </AppBar>
    </Box>
   
    </ThemeProvider>
  );
}