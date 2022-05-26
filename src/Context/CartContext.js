import React, { createContext, useState } from "react";

//Crear contexto
export const CartContext = createContext();

//Array de carrito
const cart = [];

//crear el Provider
export const CartProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState(cart);

  const isInCart = (id) => {
    return shoppingCart.some((e) => e.id === id);
  };

  const addToCart = (item, quantity) => {
    if (isInCart) {
      setShoppingCart([...shoppingCart, { quantity: quantity + 1 }]);
    } else {
      setShoppingCart([...shoppingCart, { item: item, quantity: quantity }]);
    }
  };

  const removeItem = (item) => {
    setShoppingCart(shoppingCart.filter((e) => e.item.id === item));
  };

  const clear = () => {
    setShoppingCart([]);
  };

  //return context con .Provider y dentro props.children, pasarle una prop nombre value.
  return (
    <CartContext.Provider
      value={[shoppingCart, setShoppingCart, isInCart, addToCart, removeItem, clear]}
    >
      {props.children}
    </CartContext.Provider>
  );
};
