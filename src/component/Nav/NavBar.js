import './NavBar.css';
import {Container,Nav,Navbar} from 'react-bootstrap';
import logo from '../../pics/logo.png';
import { NavLink } from 'react-router-dom'



function NavBar(){
    const handleNavClick=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return(
        <Navbar fixed='top' expand="lg">
            <Container>
                <Navbar.Brand href="/" onClick={handleNavClick}>
                    <img src={logo} alt='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" onClick={handleNavClick}>Home</NavLink>
                    <NavLink to="/about" onClick={handleNavClick}>About Us</NavLink>
                    <NavLink to="/explore" onClick={handleNavClick}>Explore Foods</NavLink>
                    <NavLink to="/review" onClick={handleNavClick}>Review</NavLink>
                    <NavLink to="/faq" onClick={handleNavClick}>FAQ</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default NavBar;