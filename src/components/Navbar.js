import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavbarComponent() {
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">CV</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} href="#">
                Test
            </NavItem>
        </Nav>
    </Navbar>;
}

export default NavbarComponent;