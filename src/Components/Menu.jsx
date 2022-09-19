import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";


const Menu = () => {
  return (
    <>
        <Navbar bg="danger" variant="dark">
            <Container>
            <span>
                <Link to="/" className='text-white ms-3 text-decoration-none'>
                <span>🏠</span> Home
                </Link>
                <Link to="/contacto" className='text-white ms-3 text-decoration-none'>
                <span>📒</span> Contacto
                </Link></span>
                <Navbar.Brand>Happy Cake<span>🍰</span></Navbar.Brand>
            </Container>
        </Navbar>
    </>
  );
}

export default Menu