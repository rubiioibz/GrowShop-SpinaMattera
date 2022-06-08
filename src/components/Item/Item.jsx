import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

import "../Item/Item.css"

export const Item = ({
  id,
  prodName,
  subtitle,
  descripcion,
  img,
  category,
  price
}) => {

  return (
    <Card body color="success" outline style={{border: "none", minHeight: 300, cursor: "default"}} className="m-1 d-flex">
      <CardBody className="text-center">
        <img className="mb-2" src={img} width="100%" alt={prodName}></img>
        <CardTitle tag="h5">{prodName}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {subtitle}
        </CardSubtitle>
        <CardText>Precio por unidad: <b className="h2">€{price}</b></CardText>
        <CardText>{descripcion}</CardText>
        <Link
          className="text-dark"
          to={`/item/${id}`}
          style={{ textDecoration: "none" }}
        >
          <Button style={{border: "none"}} className="my-2 px-2 text-dark btnCart2">Ver detalle</Button>
        </Link>
      </CardBody>
        <p className="text-muted text-left">{category}</p>
    </Card>
  );
};
