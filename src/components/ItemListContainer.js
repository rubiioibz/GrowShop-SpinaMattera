import React from "react";
import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import  { semillas } from "../semillas.js";

const ItemListContainer = ({name}) => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    

    const data = new Promise((resolve, reject) => {
      resolve(semillas)
    });

    data.then(data => {
      setItems(data);
    });

    data.then(() => {
      setLoading(false)
    })

    data.catch(err => {
      console.error(err);
    }, [])}, 2000);
  })
  
  return (
    <>
      <h1 className="text-center">Bienvenidos a {name}</h1>
      <h3 className="text-center">PRODUCTOS DESTACADOS</h3>
    {
      loading ? (<h6 className="h1 text-center text-danger">Cargando...</h6>) : ( <ItemList items={items} /> )
    }
      
    </>
  );
};

export default ItemListContainer;
