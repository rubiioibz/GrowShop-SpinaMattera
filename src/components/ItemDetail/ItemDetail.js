import React from "react";
import "../ItemDetail/itemDetailSemillas.css";
import { ItemCount } from "../ItemCount/ItemCount";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function itemDetail({ item }) {
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
        <ItemCount
          stock={item.stock}
          initial={item.initial}
          price={item.price}
        />
        <div className="row justify-content-around">
          <Button className="col-3 my-3 text-light btnCart ">
            Agregar al carrito
          </Button>
          <Button className="col-3 my-3 text-warning btnCart">
            Comprar Ya
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default itemDetail;
