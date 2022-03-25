import './App.css';
import React from 'react';
import Footer from './components/JS/Footer';
import Header from './components/JS/Header';
import Login from './components/JS/Login';
import { Routes, Route} from 'react-router-dom';
import Products from './components/JS/Products';
import ProductDetail from './components/JS/ProductDetail';



const App = () => {
//  const [products, setProducts] = useState([]);

//  useEffect( () => {
//    fetch()
//    .then((products)=>setProducts(products))

//  })
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='login' element={<Login/>} /> 
          <Route path='footer' element={ <Footer/>}/>
          <Route path='products' element={<Products/> }/>
          <Route path='productdetail' element={< ProductDetail/>}/>
        </Routes>  
      
      </div>
    );
  }
 

export default App;
