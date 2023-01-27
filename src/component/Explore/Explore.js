import './Explore.css';
import { Container,Row,Carousel } from 'react-bootstrap';
import pic1 from '../../pics/girl1.jpg';
import pic2 from '../../pics/man1.jpg';
import Products from "../../Products";

function Explore(){
    const fetchProducts = Products.map((product)=>{
        return(
          
                <div id="card" className="col-lg-4">
                    <img src= {product.img} alt=''/>
                    <div>
                        <h6>{product.title}</h6>
                        <p>{product.time}</p>
                        <span>${product.price}</span><del>${product.old}</del>
                        <hr/>
                        <button>Order Now</button>  
                    </div>
                </div>
            
        )   
    })
    return(
        <>
            
            <div className="product">
                <Container>
                    <Row>
                        <div className="col-lg-12">
                            <h2>Explore Our Foods</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br/> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and<br/> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                            </p>
                        </div>    
                    </Row>
                </Container>    
            </div>
            <div className="pro-card">
                <Container>        
                    <Row>    
                        {fetchProducts}
                    </Row>
                </Container>
            </div>
            
        </>
        
    )
}

export default Explore;