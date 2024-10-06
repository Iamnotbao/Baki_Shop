import React from "react"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faXmark, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../src/authorization/AuthProvider";
const Notification = () => {
    const {logout} = useAuthentication();
    const navigation = useNavigate();
    const [announce, setAnnounce] = useState(0);
    const ListAnnounce = ["Welcome to our store", "Fashion Frenzy: Up to 60% off on all styles"];
    function prevNoti() {
        setAnnounce((prev) => (prev - 1 + ListAnnounce.length) % ListAnnounce.length);

    }
    function nextNoti() {
        setAnnounce((prev) => (prev + 1) % ListAnnounce.length);
    }

    function handleLogout() {
       
        logout();
        navigation('/');
    }
    return (


        <section className="notification">
            <div class="notification--block">
                <div class="notification__viewport">
                    <div class="navbar--content">
                        <div class="navbar-content-wrap">Want $10 off on your first purchase? Use code PURCHASE at checkout.</div>
                    </div>
                </div>

            </div>
            <div className="btn-logOut">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </section>

    )
}
export default Notification;