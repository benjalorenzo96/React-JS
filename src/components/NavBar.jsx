import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CartProvider, useCartContext } from "./CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function NavBar() {
  const { cartItems, removeItemFromCart, total } = useCartContext();
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <CartProvider>
      <Navbar expand="lg" className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          Cuadros
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-nav" style={{ marginRight: '100px' }}>
            <Nav.Link as={Link} to="/" className="nav-link">
              Inicio
            </Nav.Link>
            <Nav.Link href="#nosotros" className="nav-link">
              Nosotros
            </Nav.Link>
            <NavDropdown
              title="Productos"
              id="basic-nav-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/category/cuadros-de-futbol"
                className="dropdown-item"
              >
                Cuadros de Fútbol
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/category/cuadros-de-camisetas"
                className="dropdown-item"
              >
                Cuadros de Camisetas
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/category/proceres-futbolisticos"
                className="dropdown-item"
              >
                Cuadros de Próceres Futbolísticos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="link" className="ml-auto cart-link" onClick={handleShowCart}>
            <FontAwesomeIcon icon={faShoppingCart} />{" "}
            {cartItems && cartItems.length ? `(${cartItems.length})` : "(0)"}
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <p>{item.name}</p>
                  <img src={item.image} alt={item.name} className="card-img-top item-image-dos" />
                  <p>Precio: ${item.price}</p>
                  <Button variant="danger" onClick={() => removeItemFromCart(item.id)}>
                    Remover
                  </Button>
                  <hr />
                </div>
              ))}
              <p>Total a abonar: ${total}</p>
              <Link to="/checkout">
                <Button variant="success" onClick={handleCheckout}>
                  Terminar mi compra
                </Button>
              </Link>
            </div>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </Modal.Body>
      </Modal>
    </CartProvider>
  );
}

export default NavBar;


