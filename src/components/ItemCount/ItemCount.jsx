import React, { useState } from "react";
import { Button } from "reactstrap";

export const ItemCount = ({ stock, initial, price, onAdd, id }) => {
  const [count, setCount] = useState(initial);
  const [total, setTotal] = useState(price);
  const [disabled, setDisabled] = useState(false);

  const add = () => {

    if (count < stock) {
      setCount(Number(count) + 1);
      setTotal(Number(total) + Number(price));
    } else if (Number(count) === Number(stock)) {
      setDisabled(true);
    }
  };

  const subtract = () => {
    if (count > 0) {
      setCount(Number(count) - 1);
      setTotal(Number(total) - Number(price));
      setDisabled(false);
    }
  };

  return (
    <div>
      <p className="h6">Precio: €{price}</p>
      <p className="h6">Total: €{total}</p>
      <div className="row">
        <Button className="col-md-4" onClick={subtract}>
          -
        </Button>
        <p className="col-md-4 h4 text-center">{count}</p>
        <Button className="col-md-4" disabled={disabled} onClick={add}>
          +
        </Button>
        <Button className="m-auto col-3 my-3 text-light btnCart " onClick={()=> onAdd(count, id)}>
            Agregar al carrito
          </Button>
      </div>
    </div>
  );
};
