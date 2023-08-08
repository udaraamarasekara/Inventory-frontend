import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar } from "react-bootstrap";
import '../app.css';
import { Link } from "react-router-dom";

const Header=()=> {
    return (
    <Container fluid className="px-0">
        <Navbar  bg="primary" variant="dark">
           <Navbar.Brand className="navbar-brand-custom"> One Manager</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <Link to="#login">Mark Otto</Link>
            </Navbar.Text>
           </Navbar.Collapse>
        </Navbar>   
    </Container>
    );
}

export default Header;
