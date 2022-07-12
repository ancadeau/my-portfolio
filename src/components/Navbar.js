import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo_light from "../Assets/LOGO_LIGHT.png";
import logo_dark from "../Assets/LOGO_DARK.png";
import { Icon } from '@iconify/react';
import MyMUISwitch from "./MUISwitch";
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../features/darkmode/Darkmode'
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiOutlineFilePdf,
  } from "react-icons/ai";

export function NavBar() {
    const darkModeVal = useSelector(state => state.darkmode.value)
    const dispatch = useDispatch()

    const [expand, updateExpanded] = useState(false);
    const [navScrolling, updateNavbar] = useState(false);
  
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
  
    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
        className={
            navScrolling ? 
            darkModeVal ? "dark-navbar-scroll" : "light-navbar-scroll"
            : darkModeVal ? "dark-navbar" : "light-navbar"}
        expand="sm"
        expanded={expand}
        fixed="top">
            <Container>
                <Navbar.Brand className="ml-auto">
                    <MyMUISwitch checked={darkModeVal} onChange={_ => dispatch(toggleDarkMode(darkModeVal))}/>
                </Navbar.Brand>
                <Navbar.Brand href="/">
                    <img src={(darkModeVal) ? logo_dark : logo_light} width="60" height="60" alt="portfolio_img" /> {' '}
                </Navbar.Brand>
                <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => {
                    updateExpanded(expand ? false : "expanded");
                }}
                >
                <span></span>
                <span></span>
                <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                        href="/"
                        onClick={() => updateExpanded(false)}>
                            <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                        </Nav.Link> {' '}
                        <Nav.Link href="about">
                            <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                        </Nav.Link> {' '}
                        <Nav.Link href="projects">
                            <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
                        </Nav.Link> {' '}
                        <Nav.Link href="resume">
                            <AiOutlineFilePdf style={{ marginBottom: "2px" }} /> Resume
                        </Nav.Link> {' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
