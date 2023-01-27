
import './App.css';
import NavBar from './component/Nav/NavBar';
import Home from './component/home/Home';
import About from './component/about/About';
import Explore from './component/Explore/Explore';
import Footer from './component/footer/Footer';
import FAQ from './component/faq/FAQ';
import Review from './component/review/Review';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/review' element={<Review/>}/>
            <Route path='/faq' element={<FAQ/>}/>
          </Routes>
        <Footer/>
    </>    
  );
}

export default App;
