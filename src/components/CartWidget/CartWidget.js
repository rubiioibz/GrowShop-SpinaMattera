import React, { useContext } from "react";
import {NavLink} from 'reactstrap'
import Cart from "../../img/cart.png";

import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {

  const [shoppingCart, setShoppingCart] = useContext(CartContext)

    return (
      <>
        <NavLink>
          <img src={Cart} alt="carrito" />
          <span className="h4 text-success">{shoppingCart.length}</span>
        </NavLink>
      </>
    );
  }
  
  export default CartWidget;