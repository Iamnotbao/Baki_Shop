import React from "react";

const Pages=()=>{
    return(
        <>
        <li class="menu-item">
                        <a href="javascript:void(0);" class="menu-link menu-toggle">
                            <i class="menu-icon tf-icons bx bx-dock-top"></i>
                            <div class="text-truncate" data-i18n="Pages">Pages</div>
                        </a>
                        <ul class="menu-sub">
                            <li class="menu-item">
                                <a href="javascript:void(0);" class="menu-link menu-toggle">
                                    <div class="text-truncate" data-i18n="User Profile">User Profile</div>
                                </a>
                                <ul class="menu-sub">
                                    <li class="menu-item">
                                        <a href="pages-profile-user.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Profile">Profile</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="pages-profile-teams.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Teams">Teams</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="pages-profile-projects.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Projects">Projects</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="pages-profile-connections.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Connections">Connections</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:void(0);" class="menu-link menu-toggle">
                                    <div class="text-truncate" data-i18n="Account Settings">Account Settings</div>
                                </a>
                                <ul class="menu-sub">
                                    <li class="menu-item">
                                        <a href="pages-account-settings-account.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Account">Account</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="pages-account-settings-security.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Security">Security</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="pages-account-settings-billing.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Billing &amp; Plans">Billing &amp; Plans</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="pages-account-settings-notifications.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Notifications">Notifications</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="pages-account-settings-connections.html" class="menu-link">
                                            <div class="text-truncate" data-i18n="Connections">Connections</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a href="pages-faq.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="FAQ">FAQ</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="pages-pricing.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Pricing">Pricing</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:void(0);" class="menu-link menu-toggle">
                                    <div class="text-truncate" data-i18n="Misc">Misc</div>
                                </a>
                                <ul class="menu-sub">
                                    <li class="menu-item">
                                        <a href="pages-misc-error.html" class="menu-link" target="_blank">
                                            <div class="text-truncate" data-i18n="Error">Error</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="pages-misc-under-maintenance.html" class="menu-link" target="_blank">
                                            <div class="text-truncate" data-i18n="Under Maintenance">Under Maintenance</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="pages-misc-comingsoon.html" class="menu-link" target="_blank">
                                            <div class="text-truncate" data-i18n="Coming Soon">Coming Soon</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="pages-misc-not-authorized.html" class="menu-link" target="_blank">
                                            <div class="text-truncate" data-i18n="Not Authorized">Not Authorized</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li></>
    )
}
export default Pages;