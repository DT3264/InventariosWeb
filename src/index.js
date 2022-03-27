import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import Index from "./components/index.js";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div>
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="index.html" class="nav-link px-2 link-dark">
                  Inicio
                </a>
              </li>
              <li>
                <a href="precios.html" class="nav-link px-2 link-dark">
                  Precios
                </a>
              </li>
              <li>
                <a href="faq.html" class="nav-link px-2 link-dark">
                  FAQ
                </a>
              </li>
              <li>
                <a href="soporte.html" class="nav-link px-2 link-dark">
                  Soporte
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 link-secondary">
                  Inventarios
                </a>
              </li>
              <li>
                <a href="movInventario.html" class="nav-link px-2 link-dark">
                  Movimientos
                </a>
              </li>
            </ul>

            <div class="col-md-4 text-end">
              <button type="button" class="btn btn-outline-primary me-2">
                Inicio de sesión
              </button>
              <button type="button" class="btn btn-primary">
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </header>
      <Navbar>
        <Navbar.Brand href="#home">
          <img class="logo" src={require("./img/NW.png")} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
        </Navbar.Collapse>
      </Navbar>
      <hr />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/precios" element={<About />} />
        <Route path="/faq" element={<About />} />
        <Route path="/soporte" element={<About />} />
        <Route path="/inventarios" element={<About />} />
        <Route path="/movimientos" element={<About />} />
      </Routes>
    </div>
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
