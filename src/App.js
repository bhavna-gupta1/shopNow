import React, { useEffect } from 'react'
// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Productfilter from './Component/Productfilter/Productfilter';
import ProductDetail from './Component/ProductDetail/ProductDetail';
import Layout from './Component/Layout';
import Crausel from './Component/Crausel';
import CartPage from './Component/CartpAGE/CartPage';

function App() {
 
  return (
    <>
   
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
        
          {/* Default route: Navbar + Carousel + Productfilter */}
          <Route
          path='/home'
            index
            element={
              <>
               <Crausel/>
                <Productfilter />
              </>
            }
          />

          {/* Product Detail Page: Only Navbar and ProductDetail */}
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
