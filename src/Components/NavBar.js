import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Container className="cont">
            <Link to="/">
              <Navbar.Brand>Pocket Guru</Navbar.Brand>
            </Link>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  <span className="d-inline-block d-sm-none">
                    🏠
                  </span>
                  <span className="d-none d-sm-inline-block">
                    Home
                  </span>
                </Nav.Link>
                <Nav.Link as={Link} to="/Notes">
                  <span className="d-inline-block d-sm-none">
                    📕
                  </span>
                  <span className="d-none d-sm-inline-block">
                    Notes
                  </span>
                </Nav.Link>
                <Nav.Link as={Link} to="/calculator">
                  <span className="d-inline-block d-sm-none">
                    🧮
                  </span>
                  <span className="d-none d-sm-inline-block">
                    Calculator
                  </span>
                </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default NavBar;
