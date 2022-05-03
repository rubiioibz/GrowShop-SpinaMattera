import React from "react";

const Greeting = (props) => {
  return (
    <>
      <h1 className="text-center">Bienvenidos a {props.name}</h1>
      <h3 className="text-center">PRODUCTOS DESTACADOS</h3>
    </>
  );
};

export default Greeting;
