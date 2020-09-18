import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../checkout/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../checkout/StateProvider";

function Order({order}) {
    const [{basket}, dispatch] = useStateValue();

    return(
        <div>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order_total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    );
}

export default Order;
