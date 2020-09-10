import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "../checkout/StateProvider";
import {auth} from "../firebase.js";
import setUsername from "../utils/setUsername.js";

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to={"./"} style={{ textDecoration: 'none' }}>
                <img className="header_logo"
                     alt="Logo not found"
                     src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"} style={{ textDecoration: 'none' }}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionOne">Hello, {setUsername(user)}</span>
                        <span className="header_optionTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionOne">Returns</span>
                    <span className="header_optionTwo">& Orders</span>
                </div>

                <div className="header_option">
                    <span className="header_optionOne">Your</span>
                    <span className="header_optionTwo">Prime</span>
                </div>

                <Link to={"./checkout"} style={{ textDecoration: 'none' }}>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optionTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
