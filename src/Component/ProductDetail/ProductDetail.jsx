import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }
  function Addtocart(){
    const token=JSON.parse(localStorage.getItem('token'))
   if (!token){
    alert("Please Login ")
   }
   else{

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    const isProductInCart = existingCart.some((item) => item.id === product.id);
    if (isProductInCart) {
        // Show alert if product is already in the cart
        alert('Product is already in the cart');
      } else {
        // Add the product to the cart if it doesn't exist
        existingCart.push(product);
   
  
    localStorage.setItem('cart', JSON.stringify(existingCart));
  
 
    alert('Product Added to Cart');
      }
   }
    
    
  }

  return (
    <div className="product-detail">
      <div className="product-detail-left">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-detail-right">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price"><strong>Price:</strong> ${product.price}</p>
        <p className="product-rating"><strong>Rating:</strong> {product.rating.rate} ⭐</p>
        <p className="product-description"><strong>Description:</strong> {product.description}</p>
        <p className="product-category"><strong>Category:</strong> {product.category}</p>
        <div className="product-actions">
          <button className=" add-to-cart" onClick={Addtocart}>Add to Cart</button>
          <button className=" buy-now">Buy Now</button>
        </div>
      </div>
    </div>
    
  );
}

export default ProductDetail;
