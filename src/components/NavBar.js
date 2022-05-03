import React from "react";
import Logo from "../img/logoGrowShop.png";
import LogIn from "../img/login.png";
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
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="./components/">
          <img src={Logo} width="45px" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />

        <Collapse navbar>
          <NavbarText className="m-auto, h3" >Beccar GrowShop</NavbarText>
          <Nav className="m-auto" navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Menú
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Semillas</DropdownItem>
                <DropdownItem>Fertilizantes</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <InputGroup>
              <InputGroupText>Buscar</InputGroupText>
              <Input />
            </InputGroup>
          </Nav>
        </Collapse>
        <NavLink href="#">
          <img src={LogIn} alt="login" />
        </NavLink>
        <CartWidget/>
      </Navbar>
    </div>
  );
};

export default NavBar;
