import React from "react";
import {NavLink} from 'reactstrap'
import Cart from "../../img/cart.png";

const CartWidget = () => {


    return (
      <>
        <NavLink>
          <img src={Cart} alt="carrito" />
          <span className="h4 text-success"> 0</span>
        </NavLink>
      </>
    );
  }
  
  export default CartWidget;