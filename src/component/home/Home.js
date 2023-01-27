import { Container,Row } from "react-bootstrap";
import './Home.css';

function Home(){
    return(
    <>    
        <section>
            <Container>
                <Row>
                    <div className="col-md-12 left">
                        <h1>Good food choices<br/> are good <br/> investments.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam et purus a odio finibus bibendum amet leo.
                        </p>
                        <button id="color">Order Now</button>
                        <button id="non">Learn More</button>
                    </div>
                    
                </Row>
            </Container>
        </section>
        
    </>     
    )
}

export default Home;