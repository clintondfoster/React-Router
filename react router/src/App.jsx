
import './App.css'
import { Routes, Route } from "react-router-dom";
import Red from "./components/red";
import Blue from "./components/blue"
import Home from "./components/home";
import NavBar from "./components/navBar";
import Contact from "./components/contact";
import Cart from "./components/cart";


function App() {

  return (
    <> 
      <div id="container">
        <div className="nav"><NavBar/></div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue/>}/>
            <Route path="/red" element={<Red/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/navBar" element={<NavBar/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;



