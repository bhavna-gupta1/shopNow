// Layout.js
import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Crausel from './Crausel';
import ProductDetail from './ProductDetail/ProductDetail';

function Layout() {
  return (
   <>
    <div>
  <Navbar/>
  <div className="content">
    <Outlet/>
    {/* <Crausel/>
    <ProductDetail/> */}
  </div>
</div>
   </>
  );
}

export default Layout;
