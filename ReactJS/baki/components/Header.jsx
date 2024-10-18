import React, { useEffect, useReducer, useState } from "react";
import Logo from "../images/logo.png"
import { Profile, Heart, ArrowDown } from "../icon/icon.jsx";
import "../style/Home.scss"
import CartInfo from "./CartInfo.jsx";


import { Link, useNavigate } from "react-router-dom";
import Notification from "./Notification.jsx";
import { useSelector } from "react-redux";
import SearchProducts from "./SearchProduct.jsx";
import { useLocation } from "react-router-dom"; 

const Header = () => {
    const { items, loading, err } = useSelector((state) => state.cart);
    const navigation = useNavigate();
    const location = useLocation();
    const [currLocation, setCurrLocation] = useState("");

    console.log("update your address: ", currLocation);
    useEffect(()=>{
        setCurrLocation(location.pathname)
    },[location.pathname])    
    return (
        <>
            <Notification />
            <header>
                <section className="header__field">
                    <Link to={"/home"}>
                        <div className="logo">
                            <img className="logo__img" src={Logo} loading="lazy" />
                        </div>
                    </Link>

                    <div className="navbar">
                        <ul className="navbar__ul">
                            <li className="navbar__ul__li"><Link className="navbar__ul__li__a" to="/productList">Home<span className="navbar__ul__li__a--icon"><ArrowDown /></span></Link></li>
                            <li className="navbar__ul__li"><a className="navbar__ul__li__a" href="#">Shop<span className="navbar__ul__li__a--icon"><ArrowDown /></span></a></li>
                            <li className="navbar__ul__li"><a className="navbar__ul__li__a" href="#">Products<span className="navbar__ul__li__a--icon"><ArrowDown /></span></a></li>
                            <li className="navbar__ul__li"><a className="navbar__ul__li__a" href="#">Pages<span className="navbar__ul__li__a--icon"><ArrowDown /></span></a></li>
                            <li className="navbar__ul__li"><a className="navbar__ul__li__a" href="#">Blog<span className="navbar__ul__li__a--icon"><ArrowDown /></span></a></li>
                            <li className="navbar__ul__li"><a className="navbar__ul__li__a" href="#">Buy now<span className="navbar__ul__li__a--icon"><ArrowDown /></span></a></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <div className="contact_icon">
                                <SearchProducts locate = {currLocation !=="/home"?true:false}/>                       
                        </div>
                        <div className="contact_icon">
                            <Profile />
                        </div>
                        <div className="contact_icon">
                            <Heart />
                        </div>{
                            items.cart && <CartInfo
                                quantity={items.cart.items.length}
                            />
                        }
                    </div>
                </section>
            </header>
        </>
    )
}
export default Header;

