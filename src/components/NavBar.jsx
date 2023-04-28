import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(productId) {
    setCartItems([...cartItems, productId]);
  }

  return (
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
        <CartWidget count={cartItems.length} />
        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;






