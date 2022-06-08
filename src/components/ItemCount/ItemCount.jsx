import React, { useState } from "react";
import { Button } from "reactstrap";

export const ItemCount = ({ stock, initial, price, onAdd, id }) => {
  const [count, setCount] = useState(initial);
  const [total, setTotal] = useState(price);
  const [disabled, setDisabled] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  const add = () => {
    if (count < stock) {
      setCount(Number(count) + 1);
      setTotal(Number(total) + Number(price));
      setDisabledButton(false)
    } else if (Number(count) === Number(stock)) {
      setDisabled(true);
    }
  };

  const subtract = () => {
    if (count > 0) {
      setCount(Number(count) - 1);
      setTotal(Number(total) - Number(price));
      setDisabled(false);
      setDisabledButton(false)
    }else if(count <= 0) {
      setDisabledButton(true)
      console.log("hola");
    }
  };

  return (
    <div>
      <p className="h2">Precio: €{price}</p>
      <div className="row justify-content-center">
        <Button
          className="col-md-4 my-1"
          onClick={subtract}
          style={{ width: "40px" }}
        >
          -
        </Button>
        <input className="col-md-4 h4 text-center my-1" value={count}></input>
        <Button
          className="col-md-4"
          disabled={disabled}
          onClick={add}
          style={{ width: "40px" }}
        >
          +
        </Button>
        </div>
        <p className="h3 my-1">Total: €{total}</p>
        <Button
          className="m-auto col-3 my-3 text-light btnCart "
          onClick={() => onAdd(count, id)}
          disabled={disabledButton}
        >
          Agregar al carrito
        </Button>
    </div>
  );
};
