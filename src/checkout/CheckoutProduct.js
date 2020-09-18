import React from "react";
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider";
import StarRateIcon from '@material-ui/icons/StarRate';


function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch ({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="Not found"/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p className="product_ratingStar"><StarRateIcon/></p>
                    ))}
                </div>
                {!hideButton && (<button onClick={removeFromBasket} className="checkoutProduct_button">Remove from basket</button>)}
            </div>
        </div>
    );
}

export default CheckoutProduct;
