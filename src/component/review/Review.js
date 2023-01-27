import './Review.css';
import pic1 from '../../pics/girl1.jpg';
import pic2 from '../../pics/man1.jpg';
import { Container,Row,Carousel } from 'react-bootstrap';

function Review(){
    return(
        <>
            <div className="slider">
                <h2>Testimonials</h2>
                <Container>
                    <Row>
                        <Carousel>                            
                            <Carousel.Item>
                                <div className="ph">
                                    <img src={pic1}alt="first slide"/>
                                </div>
                                <Carousel.Caption>
                                    <div className="des">
                                        <p>
                                            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."
                                        </p>
                                        <span>Maccy Doe - Front End</span>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="ph">
                                    <img src={pic2}alt="second slide"/>
                                </div>
                                <Carousel.Caption>
                                    <div className="des">
                                        <p>
                                            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."
                                        </p>
                                        <span>Johnthan Doe - UX Designer</span>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Review;