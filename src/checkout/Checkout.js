import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js"
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import setUsername from "../utils/setUsername.js";

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="Ad not found"
                />

                <div>
                    <h3 className="checkout_greet">Hello, {setUsername(user)}</h3>
                    <h2 className="checkout_title">Your shopping Basket</h2>

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

            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    );
}



export default Checkout;
