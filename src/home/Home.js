import React from 'react';
import "./Home.css";
import Product from "./Product.js";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                    alt="Banner not found"
                     src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"
                />

                <div className="home_row">
                    <Product
                        id='1234'
                        title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={20.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />

                    <Product
                        id='1235'
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={205.99}
                        image="https://m.media-amazon.com/images/I/41eI39Hak9L._AC_UL320_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home_row">
                    <Product
                        id='1236'
                        title="Samsung LC49RG 49' Curved Led Gaming Monitor"
                        price={32.89}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        rating={5}
                    />

                    <Product
                        id='1237'
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={130}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        rating={3}
                    />

                    <Product
                        id='1238'
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={546.50}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={4}
                    />

                </div>

                <div className="home_row">
                    <Product
                        id='1239'
                        title="Samsung LC49 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 X 1440"
                        price={1399.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
