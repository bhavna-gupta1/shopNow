import React from 'react'
import Productfilter from '../Productfilter/Productfilter'

function Navbar() {
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
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        
        <li className="nav-item dropdown text white">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item text white" href="#">men</a></li>
            <li><a className="dropdown-item text white" href="#">women</a></li>
            <li><a className="dropdown-item text white" href="#">electronic</a></li>
            <li><a className="dropdown-item text white" href="#">Jwellery</a></li>
           
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 text white" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text white" type="submit">SignIn</button>
      </form>
    </div>
  </div>
</nav>
{/* crausel */}
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://t3.ftcdn.net/jpg/05/46/73/86/240_F_546738616_WxPTEz059htrIaZE0clK9hxu66LYHxIW.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://t4.ftcdn.net/jpg/03/25/70/05/240_F_325700552_5QJD12HDtfii4xkGXnjLworiJMedgZQc.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<Productfilter/>
    </>
  )
}

export default Navbar