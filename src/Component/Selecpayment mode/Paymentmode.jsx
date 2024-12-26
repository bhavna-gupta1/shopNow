import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Paymentmode.css'

function Paymentmode() {
    const navigate=useNavigate()
  const location = useLocation();
  const { totalPrice, totalDiscount, totalAmount } = location.state || {};
function Continue_buy(){
    navigate('/buy')
}
  return (
    <>
      <div className='main_payment_div_customer'>
        {/* Left Section: Payment Methods */}
        <div className='left__payment'>
          <div className='left_payment__customer'>
            <h3>Select Payment Method</h3>
            <div className='left-payment-online'>
              <input type='radio' name='paymentMethod' />
              <span>Cash On Delivery</span>
            </div>
            <div className='left-payment-online'>
              <input type='radio' name='paymentMethod' />
              <span>NetBanking</span>
            </div>
          </div>
        </div>

        {/* Right Section: Summary */}
        <div className='right__summary'>
          <div className='payment-summary'>
            <h3>Order Summary</h3>
            <div className='summary-item'>
              <span>Total Price:</span>
              <span>₹{totalPrice || 0}</span>
            </div>
            <div className='summary-item'>
              <span>Total Discount:</span>
              <span>₹{totalDiscount || 0}</span>
            </div>
            <div className='summary-item'>
              <span>Total Amount:</span>
              <span>₹{totalAmount || 0}</span>
            </div>
          </div>
        <button className='btn-continue' onClick={Continue_buy}>Continue</button>
        </div>
      </div>
    </>
  );
}

export default Paymentmode;
