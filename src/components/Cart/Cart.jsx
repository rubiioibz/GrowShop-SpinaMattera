import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

import { CartContext } from "../../Context/CartContext";

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
  ] = useContext(CartContext);

  return (
    <>
      {shoppingCart.length > 0 ? (
        <div className="row p-2 m-auto">
          {shoppingCart.map((e) => {
            return (
              <Card key={e.item.id} className="col-8 m-4">
                <CardBody>
                  <img alt="" width="100px" src={e.item.img}></img>
                  <CardTitle tag="h5">{e.item.prodName}</CardTitle>
                  <CardText>{e.item.subtitle}</CardText>
                  <p>Cantidad: {e.quantity}</p>
                  <p>Precio por unidad: ${e.item.price}</p>
                  <Button
                    className="bg-danger text-light"
                    onClick={() => {
                      removeItem(e.item.id);
                    }}
                  >
                    🗑️
                  </Button>
                </CardBody>
              </Card>
            );
          })}

          <Card className="col-3 m-2">
            <CardBody>
              <h2>Subtotal:</h2>
              <p>Cantidad de productos: {cartQuantity()}</p>
              <p>Precio final: ${totalPrice()}</p>
              <Button
                onClick={() => {
                  clear();
                }}
              >
                Vaciar carrito
              </Button>
              <Button className="bg-success m-2">Finalizar compra</Button>
            </CardBody>
          </Card>
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
