
import React, { useContext } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../images/Urban Riders.png"
import './Header.css'

const Header = () => {
  const[loggedInUser,setLoggedInUser]=useContext(UserContext)
  return (
    <div>
      <Navbar className='container' expand="lg">
        <Navbar.Brand href="/home" style={{fontWeight:'bold',fontSize:'50px'}}>Bd Rider</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto link-nav-bar">
            <Link className='links' to ="/home">Home</Link>
            <Link className='links' to="/destination">Destination</Link>
            <Link className='links' to="/Blog">Blog</Link>
            <Link className='links' to="/Contact">Contact</Link>
            <Link className='links' to="/login">{loggedInUser.name ? loggedInUser.name : 'Log In'}</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
