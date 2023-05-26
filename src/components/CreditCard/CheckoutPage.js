import React, { useState } from 'react';
import '../../style/PaymentStyling.scss'
 function CheckoutPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform card validation and payment processing logic here
    // ...

    // Clear form fields after submission
    setCardNumber('');
    setCardName('');
    setExpiryDate('');
    setCvv('');
  };

  return (
    <div className="checkout-container">
      <h1>Checkout Page</h1>
      <form className="card-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
          />
        </div>
        <div className="form-group">
          <label>Cardholder Name</label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Enter cardholder name"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="Enter CVV"
            />
          </div>
        </div>
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}
export default CheckoutPage