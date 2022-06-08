import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

import { CartContext } from "../../Context/CartContext";
import CheckOut from "../CheckOut/CheckOut";

function Cart() {
  const [
    shoppingCart,
    setShoppingCart,
    isInCart,
    addToCart,
    removeItem,
    clear,
    totalPrice,
    cartQuantity,
    show,
    setShow,
  ] = useContext(CartContext);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <>
      {shoppingCart.length > 0 ? (
        <div className="row p-2 m-auto">
          {shoppingCart.map((e) => {
            return (
              <Card key={e.item.id} className="col-8 m-4" style={{cursor: "default"}}>
                <CardBody className="row d-flex">
                  <a target="_blank" rel="noreferrer" className="col-4" href={e.item.img}>
                    <img alt="" width="250px" src={e.item.img}></img>
                  </a>
                  <div className="col-6">
                    <CardTitle tag="h5">{e.item.prodName}</CardTitle>
                    <CardText>{e.item.subtitle}</CardText>
                    <p>Cantidad: {e.quantity}</p>
                    <p>Precio por unidad: ${e.item.price}</p>
                  </div>
                  <div className="col-2">
                  <Button
                      className="bg-danger text-light"
                      onClick={() => {
                        removeItem(e.item.id);
                      }}
                    >
                      🗑️
                    </Button>
                  </div>
                </CardBody>
              </Card>
            );
          })}

          <Card className="col-3 m-2 sticky-top" style={{cursor: "default"}}>
            <CardBody>
              <h1>Subtotal:</h1>
              <p>Cantidad de productos: {cartQuantity()}</p>
              <p className="h3">Precio final: ${totalPrice()}</p>
              <Button
                onClick={() => {
                  clear();
                }}
              >
                Vaciar carrito
              </Button>
              <Button
                className="bg-success m-2"
                onClick={() => {
                  handleClick();
                }}
              >
                Finalizar compra
              </Button>
            </CardBody>
          </Card>

          {show && (
            <CheckOut
              showCheckOut={show}
              item={shoppingCart}
              total={totalPrice()}
            />
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-center my-4">El carrito de compras esta vacio</h2>
          <Link to="/">
            <p className="text-center">Volver a comprar</p>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;