import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Index from "./components/index.js";
import reportWebVitals from "./reportWebVitals";
import Faq from "./components/faq";
import Movimientos from "./components/movimientos";
import Inventario from "./components/inventarioEx";
import Precios from "./components/precios";
import Soporte from "./components/soporte";
import AppNavBar from "./components/AppNavBar";

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

        <AppNavBar />
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
