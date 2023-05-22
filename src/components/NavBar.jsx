import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartProvider, useCartContext } from "../components/UseCartContext";


function NavBar() {
  const { cartItems } = useCartContext();

  return (
    <CartProvider>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Cuadros
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/category/cuadros-de-futbol">
              Cuadros de Fútbol
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/cuadros-de-camisetas">
              Cuadros de Camisetas
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/proceres-futbolisticos">
              Cuadros de Próceres Futbolísticos
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#promociones">
              Promociones
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
          {cartItems && cartItems.length ? `(${cartItems.length})` : "(0)"}
        </Link>
      </Navbar.Collapse>
    </Navbar>
    </CartProvider>
  );
}

export default NavBar;








