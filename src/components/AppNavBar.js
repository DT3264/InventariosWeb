import { Row, Col, NavItem, Nav, Navbar, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function AppNavBar() {
  const [show, setShow] = useState(0);

  const handleClose = () => setShow(0);
  const handleShowLogin = () => setShow(1);
  const handleShowSignup = () => setShow(2);
  return (
    <>
      <Navbar className="">
        <img
          className="logo d-none d-lg-inline"
          src={require("../img/NW.png")}
          alt="..."
        />
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
        >
          <svg
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          ></svg>
        </a>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav col-12 col-lg-8 me-lg-8 mb-2 justify-content-sm-center justify-content-lg-start mb-md-0">
            <NavItem eventkey={1} href="/">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </NavItem>
            <NavItem eventkey={1} href="/precios">
              <Nav.Link as={Link} to="/precios">
                Precios
              </Nav.Link>
            </NavItem>
            <NavItem eventkey={1} href="/faq">
              <Nav.Link as={Link} to="/faq">
                FAQ
              </Nav.Link>
            </NavItem>
            <NavItem eventkey={1} href="/soporte">
              <Nav.Link as={Link} to="/soporte">
                Soporte
              </Nav.Link>
            </NavItem>
            <NavItem eventkey={1} href="/inventarios">
              <Nav.Link as={Link} to="/inventarios">
                Inventarios
              </Nav.Link>
            </NavItem>
            <NavItem eventkey={1} href="/movimientos">
              <Nav.Link as={Link} to="/movimientos">
                Movimientos
              </Nav.Link>
            </NavItem>
          </Nav>
          <Nav className="me-auto nav col-12 col-lg-4 me-lg-4 mb-2 justify-content-end mb-md-0">
            <NavItem className="d-none d-lg-flex">
              <button
                type="button"
                className="btn btn-outline-primary me-2"
                onClick={handleShowLogin}
              >
                Inicio de sesión
              </button>
            </NavItem>
            <NavItem className="d-none d-lg-flex">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleShowSignup}
              >
                Registrarse
              </button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="justify-content-center text-center d-lg-none p-0 m-0">
        <Col className="p-0 m-0">
          <button
            type="button"
            className="btn btn-outline-primary me-2"
            onClick={handleShowLogin}
          >
            Inicio de sesión
          </button>
        </Col>
        <Col className="p-0 m-0">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleShowSignup}
          >
            Registrarse
          </button>
        </Col>
      </Row>
      <hr />

      <Modal size="lg" show={show} onHide={handleClose}>
        <LoginForm registro={show == 1 ? false : true} />
      </Modal>
    </>
  );
}
