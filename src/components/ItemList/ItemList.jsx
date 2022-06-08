import React  from "react";
import { Item } from "../Item/Item";
import "../ItemList/itemList.css";

export const ItemList = ({items}) => {


  return (
    <div className="container d-flex justify-content-center h-100 align-items-center my-4">
      <div className="row">
        {items.map(
          ({
            id,
            prodName,
            subtitle,
            descripcion,
            img,
            stock,
            initial,
            price,
            category
          }) => {
            return (
                <div className="col-md-4" key={id}>
                  <Item
                    id={id}
                    prodName={prodName}
                    subtitle={subtitle}
                    category={category}
                    img={img}
                    stock={stock}
                    initial={initial}
                    price={price}
                  />
                </div>
            );
          }
        )}
      </div>
    </div>
  );
};
