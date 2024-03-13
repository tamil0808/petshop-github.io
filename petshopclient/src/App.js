import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import Home from './components/Home';
import Login from './components/Login'; 
import Signup from './components/Signup';
import Cart from './components/Cart';
import Product from './components/Product';
import Medicine from './components/Medicine';
import Service from './components/Service';
import Accessories from './components/Accessories';
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    window.location.href = '/Cart';
  };

  return (
    <Router>
      <div className='App'>
        <div className='header'>
          <h1 className='text'>Pet Paradise</h1>
          <ul className='navigation'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Product'>Pets</Link></li>
            <li><Link to='/Accessories'>Accessories</Link></li>
            <li><Link to='/Medicine'>Medicine</Link></li>
            <li><Link to='/Service'>Services</Link></li>
            <li><Link to='/Cart'>Cart</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Accessories' element={<Accessories />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Medicine' element={<Medicine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
