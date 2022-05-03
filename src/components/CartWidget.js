import React from "react";
import {NavLink} from 'reactstrap'
import Cart from "../img/cart.png";

const CartWidget = () => {


    return (
      <>
        <NavLink href="#">
          <img src={Cart} alt="carrito" />
          <span className="h4"> 0</span>
        </NavLink>
      </>
    );
  }
  
  export default CartWidget;