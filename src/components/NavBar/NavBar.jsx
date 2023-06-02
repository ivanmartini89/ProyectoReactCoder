import React from 'react';
import bugMinerLogo from '../../assets/images/Bugminer Logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import './NavBar.css';
import {LinkContainer} from 'react-router-bootstrap'
import { useState } from 'react';
import useCartContext from '../../store/CartContext.jsx';



function NavBar(props) {
  const [expanded, setExpanded] = useState(false);
  const { contextFunction  } = useCartContext();
  contextFunction();
    return (
<header>
<nav>
<Navbar expanded={expanded} className="headlogbg" bg="light" expand="lg">
  <Container>
  <LinkContainer to="/inicio"><Navbar.Brand className="swirl-in-fwd"><a href="/"><img className="navbar-brand" src={bugMinerLogo} alt="logo" /></a></Navbar.Brand></LinkContainer>
  
    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer onClick={() => setExpanded(false)} to="/inicio"><Nav.Link href="#home">Inicio</Nav.Link></LinkContainer>
        <NavDropdown title="Menú" id="basic-nav-dropdown">
        <LinkContainer onClick={() => setExpanded(false)} to="/"><NavDropdown.Item>Todos los productos</NavDropdown.Item></LinkContainer>  
        <LinkContainer onClick={() => setExpanded(false)} to="/category/Btc"><NavDropdown.Item>Btc</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/Etherum"><NavDropdown.Item>Etherum</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/Dogecoin"><NavDropdown.Item>Dogecoin</NavDropdown.Item></LinkContainer>
        </NavDropdown>
        
      </Nav>
      
    </Navbar.Collapse>
    <CartWidget />
  </Container>
  
  </Navbar>
  </nav>
  </header>
    );
}

export default NavBar;