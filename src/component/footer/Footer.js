import './Footer.css';
import { Container,Row } from 'react-bootstrap';
function Footer(){
    return(
    <footer>
        <Container>
            <Row>
                <div className="col-lg-12">
                    <ul>
                        <li>Register</li>
                        <li>Forum</li>
                        <li>Affiliate</li>
                        <li>FAQ</li>    
                    </ul>
                    <span>&copy;2021. Foodera. All rights reserved.</span> 
                </div>    
            </Row>    
        </Container>    
    </footer>   
    )
    
}            
            
export default Footer;