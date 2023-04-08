import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Cuadros</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Nosotros</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Cuadros de Fútbol</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Cuadros de Camisetas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cuadro de Próceres Futbolísticos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Promociones</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
}


export default NavBar;
