import React from "react";
import { ItemList } from "./ItemList";

const ItemListContainer = ({name}) => {

  return (
    <>
      <h1 className="text-center">Bienvenidos a {name}</h1>
      <h3 className="text-center">PRODUCTOS DESTACADOS</h3>

      <ItemList />
    </>
  );
};

export default ItemListContainer;
