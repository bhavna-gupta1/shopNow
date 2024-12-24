import React from 'react'
import Productfilter from '../Productfilter/Productfilter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Navigate, useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate=useNavigate()
  function Home(){
    navigate('/home')
  }
  function Add_cart(){
    navigate('/cart')
  }
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white"  href="#">ShopNoW</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={Home}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        
        <li className="nav-item dropdown text white">
          <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item text white" href="#">men</a></li>
            <li><a className="dropdown-item text white" href="#">women</a></li>
            <li><a className="dropdown-item text white" href="#">electronic</a></li>
            <li><a className="dropdown-item text white" href="#">Jwellery</a></li>
           
          </ul>
        </li>
        <FontAwesomeIcon
        icon={faShoppingCart}
        className="cart-icon"
        onClick={Add_cart}
      />
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 text white" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text white" type="submit">SignIn</button>
      </form>
    </div>
  </div>
</nav>
{/* crausel */}



    </>
  )
}

export default Navbar