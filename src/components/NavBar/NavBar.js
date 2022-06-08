import React, { useContext, useState } from "react";
//img
import Logo from "../../img/logoGrowShop.png";
import LogIn from "../../img/login.png";
//cartWidget
import CartWidget from "../CartWidget/CartWidget";
//CSS
import "../NavBar/navBar.css";

//cartContext
import { CartContext } from "../../Context/CartContext";

//reacstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
  Nav,
  NavLink,
} from "reactstrap";

//React Router-Dom
import { Link } from "react-router-dom";

const NavBar = () => {
  //Styles
  const styles = {
    color: "black",
    fontSize: 18,
    margin: 20,
    textDecoration: "none",
    padding: "0px 50px"
  };

  const [shoppingCart] = useContext(CartContext);

  //hacer funcionar el menu hamburguesa
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="sticky-top">
      <Navbar color="light" expand="md" light>
        <NavbarBrand>
          <Link to="/">
            <img src={Logo} width="45px" alt="logo" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={open} navbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <NavbarText className="m-auto h3 text-success titulo">
              Beccar GrowShop
            </NavbarText>
          </Link>
          <Nav className="m-auto" navbar>
            <Link to="/category/semillas" style={styles} className="linkNavBar">
              Semillas
            </Link>
            <Link to="/category/CBD" style={styles} className="linkNavBar">
              CBD
            </Link>
            <Link to="/category/aceites" style={styles} className="linkNavBar">
              Aceites
            </Link>
            <Link
              to="/category/fertilizantes"
              style={styles}
              className="linkNavBar"
            >
              Fertilizantes
            </Link>
          </Nav>
        </Collapse>
        <NavLink>
          <img src={LogIn} alt="login" />
        </NavLink>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          {shoppingCart.length > 0 && (
            <CartWidget cantItems={shoppingCart.length} />
          )}
        </Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
