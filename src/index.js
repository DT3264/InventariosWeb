import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Row, Col, NavItem, Nav, Navbar } from "react-bootstrap";
import Index from "./components/index.js";
import reportWebVitals from "./reportWebVitals";
import Faq from "./components/faq";
import Movimientos from "./components/movimientos";
import Inventario from "./components/inventarioEx";
import Precios from "./components/precios";
import Soporte from "./components/soporte";

ReactDOM.render(
  <Router>
    <header className="px-3 mb-3 border-bottom">
      <div>
        <div className="container d-inline d-lg-none p-0 m-0">
          <div className="row justify-content-center">
            <div className="col-1 p-0">
              <img className="logo" src={require("./img/NW.png")} alt="..." />
            </div>
          </div>
        </div>

        <Navbar className="">
          <img
            className="logo d-none d-lg-inline"
            src={require("./img/NW.png")}
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
              <NavItem
                className="d-none d-lg-flex"
                eventkey={1}
                href="/movimientos"
              >
                <button type="button" className="btn btn-outline-primary me-2">
                  Inicio de sesión
                </button>
              </NavItem>
              <NavItem
                className="d-none d-lg-flex"
                eventkey={1}
                href="/movimientos"
              >
                <button type="button" className="btn btn-primary">
                  Registrarse
                </button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row className="justify-content-center text-center d-lg-none p-0 m-0">
          <Col className="p-0 m-0">
            <button type="button" className="btn btn-outline-primary me-2">
              Inicio de sesión
            </button>
          </Col>
          <Col className="p-0 m-0">
            <button type="button" className="btn btn-primary">
              Registrarse
            </button>
          </Col>
        </Row>
        <hr />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/inventarios" element={<Inventario />} />
          <Route path="/movimientos" element={<Movimientos />} />
        </Routes>
      </div>
    </header>
  </Router>,
  document.getElementById("root")
);

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
    </>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
