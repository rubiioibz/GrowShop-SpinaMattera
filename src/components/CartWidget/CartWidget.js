import React, { useContext } from "react";
import { NavLink } from "reactstrap";
import Cart from "../../img/cart.png";

import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const [
    shoppingCart,
    setShoppingCart,
    isInCart,
    addToCart,
    removeItem,
    clear,
    totalPrice,
    cartQuantity,
  ] = useContext(CartContext);

  return (
    <>
      <NavLink>
        <img src={Cart} alt="carrito" />
        <span className="h4 text-success">{cartQuantity()}</span>
      </NavLink>
    </>
  );
};

export default CartWidget;
