import React, { useState } from "react";
//img
import Logo from "../../img/logoGrowShop.png";
import LogIn from "../../img/login.png";
//cartWidget
import CartWidget from "../CartWidget/CartWidget";
//CSS
import "../NavBar/navBar.css";

//reacstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
  Nav,
  NavLink,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";

//React Router-Dom
import { Link } from "react-router-dom";

const NavBar = () => {
  //hacer funcionar el menu hamburguesa
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="./components/">
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
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Menú
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <Link to="/category/semillas" style={{ textDecoration: "none" }}>
                    Semillas
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/category/CBD" style={{ textDecoration: "none" }}>
                    CBD
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/category/Aceites" style={{ textDecoration: "none" }}>
                    Aceites
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/category/Fertilizantes" style={{ textDecoration: "none" }}>
                    Fertilizantes
                  </Link>
                </DropdownItem>
                <DropdownItem>Iluminacion</DropdownItem>
                <DropdownItem>Sustratos</DropdownItem>
                <DropdownItem>Armarios e Invernaderos</DropdownItem>
                <DropdownItem>Kits de cultivo</DropdownItem>
                <DropdownItem>Accesorios</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <InputGroup>
              <InputGroupText>Buscar</InputGroupText>
              <Input />
            </InputGroup>
          </Nav>
        </Collapse>
        <NavLink>
          <img src={LogIn} alt="login" />
        </NavLink>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <CartWidget />
        </Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
