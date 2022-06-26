import React, { useState, useContext } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";

import { CartContext } from "../../Context/CartContext";
import { db } from "../../firebase/firebaseConfig";

function CheckOut({ showCheckOut, item, total }) {
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
  const [showModal, setShowModal] = useState(showCheckOut);
  const [order, setOrder] = useState("");
  let today = new Date();
  const initialState = {
    name: "",
    number: "",
    email: "",
    items: [
      {
        id: " ",
        title: " ",
        price: " ",
      },
    ],
    date: "",
    total: "",
  };

  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      items: item,
      total: total,
      date: today,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "Orders"), values);
    setOrder(docRef.id);
    setValues(initialState);
  };

  const handleClose = () => {
    setShowModal(false);
    setShow(false);
  };

  return (
    <>
      <Modal className="cardForm" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Orden de compra</Modal.Title>
        </Modal.Header>
        {order ? (
          <>
            <Card className="cardForm m-3 p-3">
              <Card.Title className="text-success">Órden enviada</Card.Title>
              <Card.Body>
                <Card.Text>
                  Su número de orden es: <mark>{order}</mark>
                </Card.Text>
                <Card.Footer className="text-light bg-success d-flex justify-content-around">
                  ¡Muchas gracias por su compra! en breves recibira su pedido en
                  su domicilio.
                </Card.Footer>
              </Card.Body>
              <Button
                variant="secondary"
                onClick={() => clear()}
                className="btnForm m-auto"
              >
                Salir
              </Button>
            </Card>
          </>
        ) : (
          <>
            <Form onSubmit={onSubmit}>
              <Form.Group className="m-3 p-2 inputForm" controlId="name">
                <div className="my-2">
                  <Form.Label className="labelForm">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    className="labelForm text-center"
                    placeholder="Bob Marley"
                    name="name"
                    value={values.name}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="my-2">
                  <Form.Label className="labelForm">
                    Número de teléfono
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    className="labelForm text-center"
                    placeholder="420 420 420"
                    name="number"
                    value={values.number}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="my-2">
                  <Form.Label className="labelForm">Email</Form.Label>
                  <Form.Control
                    type="email"
                    className="labelForm text-center"
                    placeholder="bob-marley@gmail.com"
                    name="email"
                    value={values.email}
                    onChange={handleOnChange}
                  />
                </div>
              </Form.Group>
              <div className="m-3 text-center p-1">
                <Button variant="danger" onClick={handleClose} className="mx-1">
                  Salir
                </Button>
                <Button type="submit" variant="success" className="mx-1">
                  Enviar
                </Button>
              </div>
            </Form>
          </>
        )}
      </Modal>
    </>
  );
}

export default CheckOut;
