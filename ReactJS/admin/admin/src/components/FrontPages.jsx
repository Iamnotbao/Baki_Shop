import React from "react";

const FrontPages = () => {
    return (
        <>
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-store"></i>
                    <div class="text-truncate" data-i18n="Front Pages">Front Pages</div>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="../front-pages/landing-page.html" class="menu-link" target="_blank">
                            <div class="text-truncate" data-i18n="Landing">Landing</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="../front-pages/pricing-page.html" class="menu-link" target="_blank">
                            <div class="text-truncate" data-i18n="Pricing">Pricing</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="../front-pages/payment-page.html" class="menu-link" target="_blank">
                            <div class="text-truncate" data-i18n="Payment">Payment</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="../front-pages/checkout-page.html" class="menu-link" target="_blank">
                            <div class="text-truncate" data-i18n="Checkout">Checkout</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="../front-pages/help-center-landing.html" class="menu-link" target="_blank">
                            <div class="text-truncate" data-i18n="Help Center">Help Center</div>
                        </a>
                    </li>
                </ul>
            </li>
        </>
    )
}
export default FrontPages