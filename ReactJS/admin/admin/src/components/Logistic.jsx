import React from "react";

const Logistics = () => {
    return (
        <>
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-car"></i>
                    <div class="text-truncate" data-i18n="Logistics">Logistics</div>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="app-logistics-dashboard.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Dashboard">Dashboard</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="app-logistics-fleet.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Fleet">Fleet</div>
                        </a>
                    </li>
                </ul>
            </li>
        </>
    )
}
export default Logistics;