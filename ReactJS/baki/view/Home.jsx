import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ReactNavbar } from "overlay-navbar";
import "../style/Home.scss"
import Header from "../components/Header.jsx";
import Notification from "../components/Notification.jsx";
import Main from "../components/Main.jsx";
import ProductSlides from "../components/ProductSlides.jsx"
import About from "../components/About.jsx"
import Category from "../components/Category.jsx";
import Promotion from "../components/Promotion.jsx"
import Feature from "../components/Feature.jsx";
import Testimonial from "../components/Testimonial.jsx"
import Instagram from "../components/Instagram.jsx";
import Benefits from "../components/Benefits.jsx";
import Footer from "../components/Footer.jsx";
import { useAuthentication } from "../src/authorization/AuthProvider.jsx";
const Home = () => {
    const [countries, setCountries] = useState('');
    const { isAuthenticated } = useAuthentication();
    const navigation = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigation("/");
        }
    },[isAuthenticated,navigation])
    async function getCountries() {
        try {
            const response = await axios.get("https://countriesnow.space/api/v0.1/countries/");
            if (response.data.data) {
                console.log(response.data.data);
                setCountries(response.data.data);
            }
            else {
                console.log("not data");
            }
        }
        catch (err) {
            console.log(err);
        }
    }



    return (
        <>
            <main>
                <Main />
                <ProductSlides />
                <About />
                <Category />
                <Promotion />
                <Feature />
                <Testimonial />
                <Instagram />
                <Benefits />
            </main>
        </>
    )
}
export default Home;