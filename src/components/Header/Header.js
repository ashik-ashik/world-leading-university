import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from "../../logo.ico"

const Header = () => {
  return (
    <header className="sticky-top">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand"><img className="site-logo" src={logo} alt="" /> WLU-21</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" ></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink activeClassName="active" className="nav-link" to="/home">Home</NavLink>
              <NavLink activeClassName="active" className="nav-link" to="/courses">Courses</NavLink>
              <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
              <NavLink activeClassName="active" className="nav-link" to="/events">Events</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;