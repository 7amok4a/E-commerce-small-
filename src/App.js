import './App.css';
import About from './componant/About';
import Detalies from './componant/Detalies';
import Navbar from './componant/Navbar';
import ProductList from './componant/ProductList';
import Slider from './componant/Slider';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<> <Slider/>     <ProductList/></>}>
      </Route>

      <Route path="about" element ={<><About /></>}>
      </Route>

      <Route path="product/:productId" element ={<Detalies />}></Route>

    </Routes>


    </>
  );
}

export default App;
