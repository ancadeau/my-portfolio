import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import portfolio_light from "../Assets/portfolio_light.png";
import portfolio_dark from "../Assets/portfolio_dark.png";
import { Icon } from '@iconify/react';
import MyMUISwitch from "./MUISwitch";
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../features/darkmode/Darkmode'

export function NavBar() {
    const darkModeVal = useSelector(state => state.darkmode.value)
    const dispatch = useDispatch()

    return (
        <Navbar className='top-navbar' bg={(darkModeVal) ? "dark" : "light"} variant={(darkModeVal) ? "dark" : "light"} expand="sm" fixed="top">
            <Container>
                <Navbar.Brand className="ml-auto">
                    <MyMUISwitch checked={darkModeVal} onChange={_ => dispatch(toggleDarkMode(darkModeVal))}/>
                </Navbar.Brand>
                <Navbar.Brand href="#">
                    <img src={(darkModeVal) ? portfolio_dark : portfolio_light} width="30" height="30" alt="portfolio_img" /> {' '}
                    Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0">
                        <Nav.Link href="/">
                            <Icon icon="ant-design:home-outlined" inline={true} /> {''}
                            Home
                        </Nav.Link>
                        <Nav.Link href="about">
                            <Icon icon="carbon:user-profile" inline={true} /> {''}
                            About
                        </Nav.Link>
                        <Nav.Link href="projects">
                            <Icon icon="bi:file-earmark-code" inline={true} /> {''}
                            Projects
                        </Nav.Link>
                        <Nav.Link href="resume">
                            <Icon icon="ant-design:file-text-twotone" inline={true} /> {''}
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
