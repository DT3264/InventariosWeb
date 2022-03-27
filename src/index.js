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
      <Navbar>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavItem eventkey={1} href="/">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </NavItem>
            <NavItem eventkey={1} href="/reactBootstrap">
              <Nav.Link as={Link} to="/reactBootstrap">
                aaa
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/reactBootstrap" element={<About />} />
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
