import React, {useState} from 'react';
import '../../style/PaymentStyling.scss'
import {useLocation, useNavigate} from "react-router-dom";
import axios from "../../api/axios";

const PAYMENT_URL = '/payment'

function CheckoutPage() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const {state} = useLocation();
    const authTokenSession = sessionStorage.getItem('token');
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const headers = {
                Authorization: `Bearer ${authTokenSession}`,
            }

            const response = await axios.post(PAYMENT_URL, {
                username: "student-test",
                courseId: state.courseId,
                creditCard: {
                    name: cardName,
                    cardNumber,
                    expirationYear: expiryDate.substring(3, expiryDate.length),
                    expirationMonth: expiryDate.substring(0, 2),
                    cvc
                }
            }, {headers});
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

        navigate('/home');
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
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
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
