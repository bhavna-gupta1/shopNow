import React, { useState } from 'react';
import './CartPage.css';

function CartPage() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Increment quantity of a product
  const incrementQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Decrement quantity of a product
  const decrementQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Delete a product from the cart
  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate totals
  const totalPrice = cart.reduce((acc, item) => acc + (item.totalPrice || item.price), 0);
  const totalDiscount = 45; // Fixed discount value (you can calculate based on logic)
  const totalAmount = totalPrice - totalDiscount;

  return (
    <div className="cart-page">
      <h2>ShoP NoW !!!!</h2>
      <div className="cart-container">
        {/* Left-side Cart Items */}
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h5 className="cart-item-title">{product.title}</h5>
                  <p className="cart-item-price">Price: ${product.price}</p>
                  <p>Total Price: ${product.totalPrice || product.price}</p>
                  <p className="cart-item-description">{product.description}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => decrementQuantity(product.id)} className="btn-quantity">
                      -
                    </button>
                    <span>{product.quantity || 1}</span>
                    <button onClick={() => incrementQuantity(product.id)} className="btn-quantity">
                      +
                    </button>
                  </div>
                  <button onClick={() => deleteItem(product.id)} className="btn-delete">
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right-side Summary Section */}
        <div className="cart-summary">
          <h3>Summary</h3>
          <div className="summary-item">
            <p>Total Price</p>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <p>Total Discount</p>
            <span>${totalDiscount.toFixed(2)}</span>
          </div>
          <hr />
          <div className="summary-item">
            <p>Amount</p>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button className="btn-continue">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
