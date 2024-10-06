import React from "react"


const Dashboards = () => {
    return (
        <>
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-home-smile"></i>
                    <div class="text-truncate" data-i18n="Dashboards">Dashboards</div>
                    <span class="badge rounded-pill bg-danger ms-auto">5</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="dashboards-analytics.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Analytics">Analytics</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="dashboards-crm.html" class="menu-link">
                            <div class="text-truncate" data-i18n="CRM">CRM</div>
                        </a>
                    </li>
                    <li class="menu-item active">
                        <a href="app-ecommerce-dashboard.html" class="menu-link">
                            <div class="text-truncate" data-i18n="eCommerce">eCommerce</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="app-logistics-dashboard.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Logistics">Logistics</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="app-academy-dashboard.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Academy">Academy</div>
                        </a>
                    </li>
                </ul>
            </li></>
    )
}
export default Dashboards;