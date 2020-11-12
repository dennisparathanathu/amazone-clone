import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';

function Header() {

    const [{ basket }] = useStateValue();
    console.log(basket);

    return (
        <nav className="header">

            {/* logo to the left*/}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""></img>
            </Link>

            {/* search box after that*/}
            <div className="header__search">
                <input type="text" className="header__searchinput"/>
                <SearchIcon className="header__searchicon"/>

            </div>
            
            {/* 3 links to be placed*/}
            <div className="header__navbar_links">
                {/* first link*/}
                <Link to="/login" className="header__link">
                    <div className="header_navbar_link1">
                        <span className="header_navbar_link1_lin1">Hello.sign in</span>
                        <span className="header_navbar_link1_lin2">Account</span>

                    </div>
                </Link>

                {/* second link*/}
                <Link to="/" className="header__link">
                    <div className="header_navbar_link1">
                        <span className="header_navbar_link1_lin1">Returns</span>
                        <span className="header_navbar_link1_lin2">& Orders</span>
                    </div>
                </Link>

                {/* third link*/}

                <Link to="/checkout" className="header__link">
                    <div className="header_navbar_link1">
                        <span className="header_navbar_link1_lin1">Your</span>
                        <span className="header_navbar_link1_lin2">Prime</span>

                    </div>
                </Link>

            </div>
            <Link to="/checkout" className="header__link">
                {/* Basket icon with a number*/}
                <div className="headernav__basket">
                    {/* basket icon*/}
                    <ShoppingBasketIcon/>
                    {/* number*/}

    <span className="header_navbar_link1_lin2 basket_count">{basket?.legth}</span>

                </div>
            </Link>
            
         
        </nav>
    )
}


export default Header











































































































