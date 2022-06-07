import React, { useState, useContext } from "react";
import "../ItemDetail/itemDetailSemillas.css";
import { ItemCount } from "../ItemCount/ItemCount";

import { CartContext } from "../../Context/CartContext";

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
  const [shoppingCart, setShoppingCart, isInCart, addToCart, removeItem, clear ] = useContext(CartContext);

  const [ quantity, setQuantity ] = useState(0);

  const [ itemID, setItemID ] = useState();

  let initial = 1;
  const [cuenta, setCuenta] = useState(initial);

  const onAdd = (quantity, itemID) => {
    setCuenta(0);
    setQuantity(quantity);
    setItemID(itemID);
    addToCart(item, quantity);
  };

  return (
    <Card className="m-5 w-50 container p-2 mx-auto d-block">
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
              id={item.id}
              price={item.price}
              onAdd={onAdd}
            />
          ) : (
            <div className="row">
            <div className="m-auto">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button className="col-3 my-3 mx-auto text-light btnCart">
                  Seguir comprando
                </Button>
              </Link>
            </div>
            <div className="m-auto">
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <Button className="col-3 my-3 mx-auto text-warning btnCart">
                  Ir al carrito
                </Button>
              </Link>
            </div>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ItemDetail;
