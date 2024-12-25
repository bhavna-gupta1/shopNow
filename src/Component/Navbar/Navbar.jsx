import React, { useState } from 'react';
import Productfilter from '../Productfilter/Productfilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const[username,setusername]=useState('')
  const[password,setpassword]=useState('')
  const navigate = useNavigate();

  function Home() {
    navigate('/home');
  }
  function Add_cart() {
    navigate('/cart');
  }
  function Handle_login(e) {
    e.preventDefault(); // Prevent the default form submission behavior
  
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // username: username,
        // password: password
        username:"mor_2314",
        password:"83r5^_"
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json(); // Proceed to parse JSON if the response is okay
        } else {
          throw new Error('Login failed. Please check your credentials.'); // Throw error for non-200 responses
        }
      })
      .then(json => {
        console.log(json); // Log the response data
        alert('Login successful!'); // Show success alert
        localStorage.setItem('token', JSON.stringify(json));
      })
      .catch(err => {
        console.error(err); // Handle and log any errors
        alert(err.message); // Display error message in an alert
      });

  }
  function Logout(){
    localStorage.removeItem('token')
    navigate('/home')
  }
  

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            ShopNoW
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={Home}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown text white">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text white" href="#">
                      Men
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text white" href="#">
                      Women
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text white" href="#">
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text white" href="#">
                      Jewellery
                    </a>
                  </li>
                </ul>
              </li>
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" onClick={Add_cart} />
              <p className='logout' onClick={Logout}>Logout</p>
            </ul>
            

            <form className="d-flex" role="search">
              <input
                className="form-control me-2 text white"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* Login button linked to modal */}
              <button
                type="button"
                className="btn btn-outline-success text-white"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Add your login form or other content */}
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Username
                  </label>
                  <input type="text" className="form-control" id="username" placeholder="Enter your uername" required  value={username} onChange={(e)=>{
                   setusername(e.target.value)
                  }}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password"  required  value={password} onChange={(e)=>{
                    setpassword(e.target.value)
                  }}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={Handle_login}>
                  Login
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
