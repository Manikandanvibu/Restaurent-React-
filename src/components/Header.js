import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        alt=""
                        src="https://i.postimg.cc/JzBLBHqp/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png"
                        width="60"
                        height="35"
                        className="d-inline-block align-top"
                    />{' '}
                    Food Villa
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header