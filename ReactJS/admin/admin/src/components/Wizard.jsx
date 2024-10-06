import React from "react";

const Wizard = () => {
    return (
        <>
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-spreadsheet"></i>
                    <div class="text-truncate" data-i18n="Wizard Examples">Wizard Examples</div>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="wizard-ex-checkout.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Checkout">Checkout</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="wizard-ex-property-listing.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Property Listing">Property Listing</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="wizard-ex-create-deal.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Create Deal">Create Deal</div>
                        </a>
                    </li>
                </ul>
            </li>
        </>
    )
}
export default Wizard;