import React from 'react';
import "./Product.css";
import {useStateValue} from "../checkout/StateProvider";
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({ id, title, image, price, rating }) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch item into the data layer.
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p className="product_ratingStar"><StarRateIcon/></p>
                    ))}
                </div>
            </div>

            <img src={image} alt="Not found"/>

            <button onClick={addToBasket} className="product_button">Add to basket</button>
        </div>
    );
}

export default Product;
