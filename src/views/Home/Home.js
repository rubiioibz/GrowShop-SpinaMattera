import React from "react";
import Carrusel from "../../components/Carrusel/Carrusel";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

function Home() {
  return (
    <div>
      <h1 className="text-center my-3">Bienvenidos a Beccar GrowShop</h1>
      <Carrusel />
      <h2 className="text-center my-3">Nuestros productos</h2>
      <ItemListContainer/>
    </div>
  );
}

export default Home;
