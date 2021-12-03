import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../../../assets/img/logo.png'
export const Header = () => {
    return (
        <Navbar
        collapseOnSelect
        variant="dark"
        bg="info"
        expand="md"
        >
            <Navbar.Brand href="#home"><img src={logo} alt="" width="50px"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">DashBoard</Nav.Link>
                    <Nav.Link href="#home">Tickets</Nav.Link>
                    <Nav.Link href="#home">Logout</Nav.Link>
                </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}
