import React from "react";
import { Item } from "../Item";
import "../ItemDetail/itemDetailSemillas.css"

function itemDetail({ item }) {
  return (
    <div className="col-md-4" key={item.id}>
      <Item
        prodName={item.prodName}
        subtitle={item.subtitle}
        descripcion={item.descripcion}
        img={item.img}
        stock={item.stock}
        initial={item.initial}
        price={item.price}
      />
    </div>
  );
}

export default itemDetail;
