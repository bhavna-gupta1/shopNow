import React, { useState} from 'react'
import './Productfilter.css'
import { useEffect } from 'react';

function Productfilter() {
    // const [username, setusername] = useState();
    // const [password, setpassword] = useState();
    const [data, setdata] = useState();
    const [category, setCategory] = useState("all");
   
   // Function to fetch products by category
   const fetchProducts = (category) => {
    let url = "https://fakestoreapi.com/products";
    if (category !== "all") {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
        console.log(data, "product_data");
      });
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);
  
    function onEdit() {
      console.log("edit");
    }
  
    function onDelete() {
      console.log("delete");
    }
    function onEdit(productId) {
        console.log("Edit product with ID:", productId);
      }
  return (
    <>
   <div className='filter_btn'>
   <button type="button" className="btn btn-outline-dark custom-outline-btn" onClick={() => setCategory("all")}>All</button>
   <button type="button" className="btn btn-outline-dark custom-outline-btn"  onClick={() => setCategory("men's clothing")}>Men</button>
   <button type="button" className="btn btn-outline-dark custom-outline-btn" onClick={() => setCategory("women's clothing")}>Women</button>
   <button type="button" className="btn btn-outline-dark custom-outline-btn" onClick={() => setCategory("electronics")}>Electronic</button>
   <button type="button" className="btn btn-outline-dark custom-outline-btn"  onClick={() => setCategory("jewelery")}>Jewellery</button>
   
   </div>
   {/* PRODUCT CART */}
  
   <div className="container mt-4">
      <div className="row">
        {data.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description.length > 50
                    ? `${product.description.slice(0, 50)}...`
                    : product.description}</p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <p className="card-text">
                  <strong>Rating:</strong> {product.rating.rate} ⭐ 
                  ({product.rating.count} reviews)
                </p>
                <div className="btn_div d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-outline-dark addtocart"
                    onClick={() => onEdit(product.id)}
                  >
                    Add To Cart
                  </button>
                  <button type="button" className="btn btn-outline-dark buynow">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </>
  )
}

export default Productfilter