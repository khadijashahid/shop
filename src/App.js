import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react"
import Footer from "./components/JS/Footer"

import ButtonAppBar from './components/JS/Header2'
import Login from "./components/JS/Login"
import { Routes, Route } from "react-router-dom"
import Products from "./components/JS/Products"
import ProductDetail from "./components/JS/ProductDetail"
import Cart from "./components/JS/Cart";

const App = () => {
  //  const [products, setProducts] = useState([]);

  //  useEffect( () => {
  //    fetch()
  //    .then((products)=>setProducts(products))

  //  })
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<ButtonAppBar/>} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/footer" element={<Footer />} />  */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/productdetail/:id" element={<Cart/>} />
      </Routes>

      {/* Will be shown on each page */}
      <Footer />
    </div>
  )
}

export default App