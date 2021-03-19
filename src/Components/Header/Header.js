import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar className='container text-dark' expand="lg">
        <Navbar.Brand href="#home">BD Rider</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Destination</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
