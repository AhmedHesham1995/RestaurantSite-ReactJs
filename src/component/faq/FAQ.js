import './FAQ.css';
import { Container,Row } from 'react-bootstrap';
function FAQ(){
    return(
        <>
            <div className="faq">
                <h2>Frequently Asked Questions</h2>
                <Container>
                    <Row>
                        <div className="col-lg-6">
                            <h6>Is Foodera Bread really baked fresh each day?</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-lg-6">
                            <h6>Do you bake breads containing animal fats or products?</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>    
                    </Row>
                    <br/>
                    <Row>
                        <div className="col-lg-6">
                            <h6>Can I order your products online?</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-lg-6">
                            <h6>When are you opening a shop near me?</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>    
                    </Row>        
                </Container>    
            </div>
            <div className="cover">
                    <div className="overlay">
                    </div>    
                    <Container>
                        <Row>                       
                            <div className="col-lg-8">
                                <h3>Baked fresh daily by bakers with passion.</h3>
                            </div>
                            <div className="col-lg-4">
                                <button>Learn More</button>
                            </div>                               
                        </Row>
                    </Container>
            </div>
            <div className="hurry">
                <Container>
                    <Row>
                        <div className="col-lg-12">
                            <h2>Hurry up! Subscribe our newsletter<br/>
                                and get 25% Off
                            </h2>
                            <p>
                            Limited time offer for this month. No credit card required.
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-lg-12">
                            <input type='email' placeholder="Email Address here"/>
                            <button>Subscribe</button>
                        </div>        
                    </Row>    
                </Container>    
            </div>
            
        </>
    )
}

export default FAQ;