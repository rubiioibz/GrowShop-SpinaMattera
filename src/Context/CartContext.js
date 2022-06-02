import React, { createContext, useState } from "react";

//Crear contexto
export const CartContext = createContext();

//crear el Provider
export const CartProvider = ({children}) => {

  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (item, quantity) => {
    
    if (isInCart(item.id)) {
      const index = shoppingCart.findIndex((e) => e.item.id === item.id);
      shoppingCart[index].quantity = shoppingCart[index].quantity + quantity;
      setShoppingCart([...shoppingCart]);
    } else {
      const newItem = {
        item,
        quantity,
      };
      setShoppingCart([...shoppingCart, newItem]);
    }
  };

  const isInCart = (id) => {
    return shoppingCart.some((e) => e.item.id === id);
  };

  const removeItem = (id) => {
    const update = shoppingCart.filter((e) => e.item.id !== id);
    setShoppingCart(update);
  };

  const clear = () => {
    setShoppingCart([]);
  };

  const cartQuantity = () => {
    const cartQuantity = shoppingCart.reduce(
      (accum, item) => (accum = accum + item.quantity),
      0
    );
    return cartQuantity;
  };

  const totalPrice = () => {
    return shoppingCart.reduce(
      (accum, element) => (accum + element.quantity * element.item.price),
      0
    ).toFixed(2);
  };


  //return context con .Provider y dentro props.children, pasarle una prop nombre value.
  return (
    <CartContext.Provider
      value={[shoppingCart, setShoppingCart, isInCart, addToCart, removeItem, clear, totalPrice, cartQuantity]}
    >
      {children}
    </CartContext.Provider>
  );
};
