import React from "react";

import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Carrusel from "./components/Carrusel";
import CartWidget from "./components/CartWidget";


function App() {
  return (
    <>
      <NavBar>
        <CartWidget/>
      </NavBar>
      
      <Carrusel/>
      <ItemListContainer name='Beccar GrowShop' />
    </>
  );
}

export default App;
