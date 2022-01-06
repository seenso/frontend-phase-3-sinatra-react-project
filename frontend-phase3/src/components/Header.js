import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <div id="logo-header">
      <Navbar>
        <Container>
          <Navbar.Brand>
            <a href="/">
              <img
                alt="logo"
                src="../small-logo.jpg"
                width="50"
                height="50"
                id="logo"
              />
            </a>{" "}
            <span style={{ color: "#3F559E" }}>
              <strong>Whose Turn Is It?</strong>
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
