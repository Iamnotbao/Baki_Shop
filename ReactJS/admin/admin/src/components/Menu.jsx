import React from "react";
import Logo from "./Logo";
import Dashboards from "./Dashboards";
import Layouts from "./Layouts";
import FrontPages from "./FrontPages";
import Apps_Pages from "./Apps_Pages";
import Ecommerce from "./Ecommerce";
import Academy from "./Academy";
import Logistics from "./Logistic";
import Invoice from "./Invoice";
import User from "./User";
import Role_Permission from "./Role_Permission";
import Pages from "./Pages";
import Authentication from "./Authentication";
import Wizard from "./Wizard";
import Modal from "./Modal";

const Menu = () => {
    return (
        <>
            <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme" data-bg-class="bg-menu-theme" >
                <Logo />
                <div class="menu-inner-shadow" ></div>
                <ul class="menu-inner py-1 ps ps--active-y">
                    {/* <!-- Dashboards --> */}
                    <Dashboards />

                    {/* <!-- Layouts --> */}
                    <Layouts />

                    {/* <!-- Front Pages --> */}
                    <FrontPages />
                    {/* <!-- Apps & Pages --> */}
                    <Apps_Pages />
                    {/* <!-- e-commerce-app menu start --> */}
                    <Ecommerce />
                    {/* <!-- e-commerce-app menu end -->
                    <!-- Academy menu start --> */}
                    <Academy />
                    {/* <!-- Academy menu end --> */}
                    <Logistics />
                    <Invoice />
                    <User />
                    <Role_Permission />
                    <Pages />
                    <Authentication />
                    <Wizard />
                    <Modal />
                    <div class="ps__rail-x" ><div class="ps__thumb-x" tabIndex="0" ></div>
                    </div>
                    <div class="ps__rail-y" ><div class="ps__thumb-y" tabIndex="0" ></div>
                    </div>
                </ul>
            </aside>
            <script src="../assets/vendor/libs/jquery/jquery.js"></script>
            <script src="../assets/vendor/libs/popper/popper.js"></script>
            <script src="../assets/vendor/js/bootstrap.js"></script>
            <script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
            <script src="../assets/vendor/js/menu.js"></script>

            <script src="../assets/js/main.js"></script>
        </>
    )
}
export default Menu;