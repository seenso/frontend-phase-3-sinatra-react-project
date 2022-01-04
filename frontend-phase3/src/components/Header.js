import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div id="header">
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <img
                        alt="logo"
                        src="../small-logo.jpg"
                        width="30"
                        height="30"
                        id="logo"
                        />{' '}
                            <span style={{color: "#3F559E"}}>Whose Turn Is It?</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  );
};

export default Header;