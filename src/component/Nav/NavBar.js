import './NavBar.css';
import {Container,Nav,Navbar} from 'react-bootstrap';
import logo from '../../pics/logo.png';
import { NavLink } from 'react-router-dom'



function NavBar(){

    return(
        <Navbar fixed='top' expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/explore">Explore Foods</NavLink>
                    <NavLink to="/review">Review</NavLink>
                    <NavLink to="/faq">FAQ</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default NavBar;