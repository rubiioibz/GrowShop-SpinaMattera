import React, { useState } from "react";
import "../ItemDetail/itemDetailSemillas.css";
import { ItemCount } from "../ItemCount/ItemCount";

import { Link } from "react-router-dom";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const ItemDetail = ({ item }) => {
  const initial = 1;
  const [cuenta, setCuenta] = useState(initial);

  const onAdd = (count) => {
    alert(`Has agregado ${count} productos al carrito.`);
    setCuenta(0);
  };

  return (
    <Card className="m-5 w-50 container p-2">
      <CardTitle className="text-center h2" tag="h5">
        {item.prodName}
      </CardTitle>
      <CardImg className="p-2" alt="" src={item.img} top width="100%" />
      <CardBody className="text-center">
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item.subtitle}
        </CardSubtitle>
        <CardText>{item.descripcion}</CardText>
        <div>
          {cuenta > 0 ? (
            <ItemCount
              stock={item.stock}
              initial={item.initial}
              price={item.price}
              onAdd={onAdd}
            />
          ) : (
            <div className="m-auto">
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <Button className="col-3 my-3 text-warning btnCart">
                  Ir al carrito
                </Button>
              </Link>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ItemDetail;
