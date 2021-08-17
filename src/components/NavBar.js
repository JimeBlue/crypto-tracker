import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" variant="light">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="covid.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Covid-19 <span style={{ color: '#e53e3e' }}>Tracker</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <span style={{ color: '#6377e7' }}>Home</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Profitability">
              <Nav.Link>
                <span style={{ color: '#6377e7' }}>Profitability</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/DerivativeExchanges">
              <Nav.Link>
                <span style={{ color: '#6377e7' }}>Derivative Exchanges</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
