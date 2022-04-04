import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <>
        <Navbar className="meee-auto" bg="primary" variant="dark">
          <Container className="cont">
            <Link to="/">
              <Navbar.Brand>Pocket Guru</Navbar.Brand>
            </Link>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#features">Quick Notes</Nav.Link>
              <Nav.Link as={Link} to="/calculator">
                Calculator
              </Nav.Link>
              <NavDropdown title="User" id="collasible-nav-dropdown">
                <NavDropdown.Item className="navDropDownItem" href="#action/3.1">
                  Your Profile
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropDownItem" href="#action/3.2">
                  Help
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropDownItem" href="#action/3.3">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider className="navDropDownItem" />
                <NavDropdown.Item className="navDropDownItem" href="#action/3.4">
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default NavBar;
