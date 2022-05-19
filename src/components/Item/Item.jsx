import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const Item = ({
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
    <Card body color="success" outline className="m-1">
      <CardBody className="text-center">
        <img className="mb-2" src={img} width="100%" alt={prodName}></img>
        <CardTitle tag="h5">{prodName}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {subtitle}
        </CardSubtitle>
        <CardText>{descripcion}</CardText>
        <ItemCount stock={stock} initial={initial} price={price} />
        <Button className="my-2 px-2 text-light btnCart">
          Agregar al carrito
        </Button>
        <Link
          className="text-dark"
          to={`/category/detail/${id}`}
          style={{ textDecoration: "none" }}
        >
          <Button className="my-2 px-2 text-dark btnCart bg-warning">Ver detalle</Button>
        </Link>
      </CardBody>
    </Card>
  );
};
