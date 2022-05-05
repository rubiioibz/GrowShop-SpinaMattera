import React from "react";

import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Carrusel from "./components/Carrusel";


function App() {
  return (
    <>
      <NavBar />
      <Carrusel/>
      <ItemListContainer name='Beccar GrowShop' />
    </>
  );
}

export default App;