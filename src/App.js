import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Productfilter from './Component/Productfilter/Productfilter';
import ProductDetail from './Component/ProductDetail/ProductDetail';
import Layout from './Component/Layout';
import Crausel from './Component/Crausel';
import CartPage from './Component/CartpAGE/CartPage';
import Login from './Component/Login/Login';
import AddressPage from './Component/Addresspage/AddressPage';
import Paymentmode from './Component/Selecpayment mode/Paymentmode';
import Orderplace from './Component/Orderplace/Orderplace';

function App() {
  return (
    <>
      <Router>
        {/* Navbar will always be rendered */}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <Layout /> */}
                <Crausel />
                <Productfilter />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                {/* <Layout /> */}
                <Crausel />
                <Productfilter />
              </>
            }
          />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/address' element={<AddressPage/>}/>
          <Route path='/paymentmode' element={<Paymentmode/>}/>
          <Route path='/buy' element={<Orderplace/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
