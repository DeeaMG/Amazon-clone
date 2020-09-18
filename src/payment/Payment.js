import React, {useEffect, useState} from "react";
import "./Payment.css"
import {useStateValue} from "../checkout/StateProvider";
import setUsername from "../utils/setUsername";
import CheckoutProduct from "../checkout/CheckoutProduct";
import {Link, useHistory} from "react-router-dom";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "../checkout/reducer";
import axios from "../axios";
import {db} from "../firebase.js";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getCLientSecret = async() => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret)
        }
        getCLientSecret();
    }, [basket])

    console.log("The secret is --->", clientSecret);

    const handleSubmit = async(event) => {
        event.preventDefault();
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            });

            history.replace("/orders");
        });
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return(
        <div className="payment">
            <div className="payment_container">
                <h1> Checkout
                    (
                    <Link to="/checkout"  style={{ textDecoration: 'none' }}>
                        {basket?.length} items
                    </Link>
                    ) </h1>

                {/*<Payment section - delivery section>*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment_address">
                        <p>{setUsername(user)}</p>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/*<Payment section - review items>*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/*<Payment section - payment option>*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment_details">
                        <from onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded} className="payment_button">
                                    <span> {processing ? <p>Processing</p> : "Buy Now"} </span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </from>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Payment;
