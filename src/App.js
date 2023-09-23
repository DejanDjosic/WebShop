import './App.css';
import Header from './components/Header/Header';
import {Route,Routes} from "react-router-dom";
import Products from './components/Home/Products';
import Login from './components/Login & Register/Login';
import Register from './components/Login & Register/Register';
import Cart from './components/Cart/Cart';


function App() {
  return (
   <div id="__next">
      <div className="Layout_layout__23AcS">
        <Header/>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
          </div>

   </div>
  );
}

export default App;
