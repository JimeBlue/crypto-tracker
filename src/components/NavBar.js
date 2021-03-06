import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar" variant="dark">
        <LinkContainer to="/">
          <Nav class="Link">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="crypto-logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              <span className="navbar__brand">Crypto Tracker</span>{' '}
            </Navbar.Brand>
          </Nav>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar__toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <span className="navbar__link">Home</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Profitability">
              <Nav.Link>
                <span className="navbar__link">Profitability</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/DerivativeExchanges">
              <Nav.Link>
                <span className="navbar__link">Derivative Exchanges</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
