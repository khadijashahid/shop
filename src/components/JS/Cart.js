import React, {useState } from 'react';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function getTotal(total) {
        return total.toLocaleString(undefined, currencyOptions)
      }
      function add() {
        setCart(['ice cream']);
        setTotal(5);
      }
  return (

      <div className='container'>
            <div>
                <h2>
                Cart
                </h2>
            </div>
            <div className='product'> product {cart.length} </div>
            <div> Total : {getTotal(total) }</div>
            <div>

            </div>
            <button onClick={add}> Add </button>
            <button   onClick={() => {
          setCart([]);
          setTotal(0);
        }}> Remove </button>
      </div>
    
  )
}

export default Cart;