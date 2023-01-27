import { Container,Row } from "react-bootstrap";
import './About.css';
import pride from '../../pics/1.png';
import coll from '../../pics/2.png';


function About(){
    return(
        <> 
            <div className='nums'>
            <Container>
                <Row>
                    <div className="col-md-3">
                        <h3>1287+</h3><span>SAVINGS</span>
                    </div>
                    <div className="col-md-3">
                        <h3>5786+</h3><span>PHOTOS</span>
                    </div>
                    <div className="col-md-3">
                        <h3>1440+</h3><span>ROCKETS</span>
                    </div>
                    <div className="col-md-3">
                        <h3>7110+</h3><span>GLOBES</span>
                    </div>
                </Row>
            </Container>
        </div>
        <div className="pride">
            <Container>
                <Row>
                    <div className="col-md-7">
                        <img src={pride} alt="pride" /> 
                    </div>
                    <div className="col-md-5" id="right">
                        <h3>
                            We pride ourselves on making real food from the best ingredients.
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                        </p>
                        <button>Learn More</button>
                    </div>        
                </Row>
                <Row>
                    <div className="col-md-5" id="coll-left">
                        <h3>
                            We pride ourselves on making real food from the best ingredients.
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <ul className="lis">
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>
                        </ul>
                        <button>Learn More</button>
                    </div>
                    <div className="col-md-7" id="coll-right">
                        <img src={coll} alt="collection" /> 
                    </div>        
                </Row>        
            </Container>    
        </div>
        <div className="story">
            <Container>
                <Row>
                    <div className="col-md-12">
                        <h2>When a man's stomach is full it makes no<br/>
                            difference whether he is rich or poor.
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
                           finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                        </p>
                    </div>
                </Row>
            </Container>
        </div> 
            
            
        </>
    )
}

export default About;








