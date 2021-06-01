
import './App.css';
import Navbar2 from './Components/Navbar2.js';
import Menubar from './Components/Menubar.js'
import LinkItems from './Components/LinkItems.js'; 
import Footer from './Components/Footer';
import TopImageSlider from './Components/TopImageSlider';
import { SliderData } from './Components/SliderData';
import Productslider from './Components/productslider';

function App() {
  return (
    <div className="App"> 
        <Navbar2/>
        {/* <Navbar/> */}
        <LinkItems/> 
        <Menubar/>
        <TopImageSlider slide={SliderData}/>   
         <Footer/>
         <Productslider/>
     </div>
  );
}

export default App;
