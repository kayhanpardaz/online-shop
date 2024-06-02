import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Shop from "./pages/shop/shop"
import Cart from "./pages/cart/cart"
import Nav from "./components/nav"
import {ShopContextProvider} from "./context/shopContext"
import { Footer } from './components/footer/footer';
// import { Register } from './pages/register/register';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Nav/>
        
        <Routes>
          <Route path='/' element={<Shop/>}/>
          {/* <Route path='/register' element={<Register/>}/> */}
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
