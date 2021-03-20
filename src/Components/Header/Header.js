import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../images/Urban Riders.png"

const Header = () => {
  return (
    <div>
      <Navbar className='container' expand="lg">
        <Navbar.Brand href="/home"><img style={{width:'200px'}} src={logo} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/destination">Destination</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
