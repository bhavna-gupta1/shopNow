import React, { useState } from 'react';
import './AddressPage.css';
import { useLocation, useNavigate } from 'react-router-dom';

function AddressPage() {
    const navigate=useNavigate()
  const [addresses, setAddresses] = useState(() => {
    const storedAddresses = localStorage.getItem('addresses');
    return storedAddresses ? JSON.parse(storedAddresses) : [];
  });
  const [newAddress, setNewAddress] = useState('');
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddressIndex, setEditingAddressIndex] = useState(null);
  const location = useLocation();
  const { totalPrice, totalDiscount, totalAmount } = location.state || {};

  const handleSaveAddress = () => {
    if (newAddress.trim() === '') return;

    const updatedAddresses = [...addresses];
    if (editingAddressIndex !== null) {
      updatedAddresses[editingAddressIndex] = newAddress;
    } else {
      updatedAddresses.push(newAddress);
    }
    setAddresses(updatedAddresses);
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    setNewAddress('');
    setShowAddressForm(false);
    setEditingAddressIndex(null);
  };

  const handleDeleteAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
  };

  const handleSelectAddress = (index) => {
    setSelectedAddress(index);
  };
  const Continue_payment = () => {
    navigate('/paymentmode', {
      state: { totalPrice, totalDiscount, totalAmount }, // Pass the values to AddressPage
    });
  };

  return (
    <div className="address-page">
      <h2>Manage Your Addresses</h2>

      <div className="address-container">
        <div className="address-list">
          <h3>Manage Address</h3>
          <button onClick={() => setShowAddressForm(true)} className="btn-add-new">
            Add New Address
          </button>
          {addresses.length === 0 ? (
            <p>No saved addresses.</p>
          ) : (
            addresses.map((address, index) => (
              <div key={index} className="address-item">
                <input
                  type="radio"
                  id={`address-${index}`}
                  name="delivery-address"
                  checked={selectedAddress === index}
                  onChange={() => handleSelectAddress(index)}
                />
                <label htmlFor={`address-${index}`}>{address}</label>
                <button
                  onClick={() => {
                    setEditingAddressIndex(index);
                    setNewAddress(address);
                    setShowAddressForm(true);
                  }}
                  className="btn-edit"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteAddress(index)}
                  className="btn-deletes"
                >
                  Delete
                </button>
              </div>
            ))
          )}
          {showAddressForm && (
            <div className="address-form">
              <h3>{editingAddressIndex !== null ? 'Edit Address' : 'Add New Address'}</h3>
              <textarea
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder="Enter your address"
                className="address-input"
              ></textarea>
              <button onClick={handleSaveAddress} className="btn-save">
                Save Address
              </button>
              <button onClick={() => setShowAddressForm(false)} className="btn-cancel">
                Cancel
              </button>
            </div>
          )}
        </div>

        {!showAddressForm && (
          <div className={`address-summary ${showAddressForm ? 'hidden' : ''}`}>
            <h3>Summary</h3>
            <div className="summary-item">
              <p>Total Price</p>
              <span>${totalPrice}</span>
            </div>
            <div className="summary-item">
              <p>Total Discount</p>
              <span>- ${totalDiscount}</span>
            </div>
            <hr />
            <div className="summary-item total-amount">
              <p>Total Amount</p>
              <span>${totalAmount}</span>
            </div>
            <button className="btn-continue" onClick={Continue_payment}>Continue</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddressPage;
