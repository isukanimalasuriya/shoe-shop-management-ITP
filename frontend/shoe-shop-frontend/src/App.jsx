import { Routes,Route } from "react-router-dom";
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import Home from "../src/pages/Home";
import './App.css'
import Collection from "../src/pages/Collection";
import Product from "../src/pages/Product";
import { ToastContainer, toast } from 'react-toastify';
import Cart from "../src/pages/Cart";


function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-9[vw]">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Collection" element={<Collection/>}></Route>
        <Route path="/product/:productId" element={<Product/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>
      <Footer/>
      
    </div>
    
  )
}

export default App;
