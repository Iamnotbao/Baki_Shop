import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Ecommerce = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const navigation = useNavigate();
  
    console.log(openMenu);
  
    const handleToggle = (menu, event) => {
        event.preventDefault();
        setOpenMenu(openMenu === menu ? null : menu);
    };

    function handleProduct(){
        navigation("productList");
    }
  




    return (
        <>
            <li className={`menu-item ${openMenu === "eCommerce" || openMenu === "Products" ? "active open" : ""}`}>
                <a
                    href="#"
                    className="menu-link menu-toggle"
                    onClick={(event) => handleToggle("eCommerce", event)}
                >
                    <i className="menu-icon tf-icons bx bx-cart-alt"></i>
                    <div className="text-truncate" data-i18n="eCommerce">eCommerce</div>
                </a>
                <ul className={`menu-sub ${openMenu === "eCommerce" || openMenu === "Products" ? "d-block" : "d-none"}`}>
                    <li className="menu-item">
                        <a href="app-ecommerce-dashboard.html" className="menu-link">
                            <div className="text-truncate" data-i18n="Dashboard">Dashboard</div>
                        </a>
                    </li>
                    <li className={`menu-item ${openMenu === "Products" || openMenu === "eCommerce" ? "active open" : ""}`}>
                        <a
                            href="#"
                            className="menu-link menu-toggle"
                            onClick={(event) => handleToggle("Products", event)}
                        >
                            <div className="text-truncate" data-i18n="Products">Products</div>
                        </a>
                        <ul className={`menu-sub ${openMenu === "Products" || openMenu === "eCommerce" ? "d-block" : "d-none"}`}>
                            <li className="menu-item">
                                <a onClick={handleProduct} className="menu-link">
                                    <div className="text-truncate" data-i18n="Product List">Product List</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="app-ecommerce-product-add.html" className="menu-link">
                                    <div className="text-truncate" data-i18n="Add Product">Add Product</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="app-ecommerce-category-list.html" className="menu-link">
                                    <div className="text-truncate" data-i18n="Category List">Category List</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:void(0);" class="menu-link menu-toggle">
                            <div class="text-truncate" data-i18n="Order">Order</div>
                        </a>
                        <ul class="menu-sub">
                            <li class="menu-item">
                                <a href="app-ecommerce-order-list.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Order List">Order List</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-ecommerce-order-details.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Order Details">Order Details</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:void(0);" class="menu-link menu-toggle">
                            <div class="text-truncate" data-i18n="Customer">Customer</div>
                        </a>
                        <ul class="menu-sub">
                            <li class="menu-item">
                                <a href="app-ecommerce-customer-all.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="All Customers">All Customers</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:void(0);" class="menu-link menu-toggle">
                                    <div class="text-truncate" data-i18n="Customer Details">Customer Details</div>
                                </a>
                                <ul class="menu-sub">
                                    <li class="menu-item">
                                        <a href="app-ecommerce-customer-details-overview.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Overview">Overview</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="app-ecommerce-customer-details-security.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Security">Security</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="app-ecommerce-customer-details-billing.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Address &amp; Billing">Address &amp; Billing</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="app-ecommerce-customer-details-notifications.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Notifications">Notifications</div>
                                        </a>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <a href="app-ecommerce-manage-reviews.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Manage Reviews">Manage Reviews</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="app-ecommerce-referral.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Referrals">Referrals</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:void(0);" class="menu-link menu-toggle">
                            <div class="text-truncate" data-i18n="Settings">Settings</div>
                        </a>
                        <ul class="menu-sub">
                            <li class="menu-item">
                                <a href="app-ecommerce-settings-detail.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Store Details">Store Details</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-ecommerce-settings-payments.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Payments">Payments</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-ecommerce-settings-checkout.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Checkout">Checkout</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-ecommerce-settings-shipping.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Shipping &amp; Delivery">Shipping &amp; Delivery</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-ecommerce-settings-locations.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Locations">Locations</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-ecommerce-settings-notifications.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Notifications">Notifications</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li></>
    )
}
export default Ecommerce;