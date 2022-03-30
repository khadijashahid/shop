import React, {useState } from 'react';
import {PRODUCTS} from '../../shared/products';
import { useParams } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai';
import { Container, Row, Col, Button, Media, ButtonDropdown, DropdownToggle} from 'reactstrap';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const { id } = useParams()
    const thisProduct = PRODUCTS.find(prod => prod.id === id)

    function getTotal(total) {
        return total.toLocaleString(undefined, currencyOptions)
      }
      function add() {
        setCart(['ice-cream']);
        setTotal();
      }
  return (
    <div className='purchase-card'> 
    
      <h2> SHOPPING CART </h2>
      <Media key={thisProduct.id}>
        <Media left href="#">
          <Media object src={thisProduct.image} alt={thisProduct.name}></Media>
        </Media>
     
      </Media>
  <div>
    {thisProduct.name} 
  <span> ${thisProduct.price }</span>
  <ButtonDropdown
  toggle={function noRefCheck(){}}
>
<DropdownToggle caret onClick={add}>
    {cart.length}
  </DropdownToggle>

</ButtonDropdown>
           

<Button  onClick={() => {
          setCart([]);
          setTotal(0);
        }} >
 < AiFillDelete/>
  </Button>
  </div>
      
    <Container>
    <Row>
        <Col xs={6}>Subtotal Items</Col>
        <Col xs={6}>
          <strong> ({cart.length}) </strong>
        </Col>
      </Row>
      <Row>
        <Col>
        Subtotal Price :
        </Col>
        <Col>
        $ { thisProduct.price}
        </Col>
      </Row>
      <Row>
        <Col>
        Discount:
        </Col>
        <Col>
        0%
        </Col>
      </Row>
      <Row>
        <Col>
        <strong> Total Price : </strong>
        </Col>
        <Col>
        {getTotal(total) }
        </Col>
      </Row>
      <Row>
        <Button> Proceed to checkout </Button>
      </Row>
    </Container>


    </div>

    
  )
}

export default Cart;