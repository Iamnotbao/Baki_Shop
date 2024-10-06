import React from "react";
const User = () => {
    return (
        <>
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-user"></i>
                    <div class="text-truncate" data-i18n="Users">Users</div>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="app-user-list.html" class="menu-link">
                            <div class="text-truncate" data-i18n="List">List</div>
                        </a>
                    </li>

                    <li class="menu-item">
                        <a href="javascript:void(0);" class="menu-link menu-toggle">
                            <div class="text-truncate" data-i18n="View">View</div>
                        </a>
                        <ul class="menu-sub">
                            <li class="menu-item">
                                <a href="app-user-view-account.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Account">Account</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-user-view-security.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Security">Security</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-user-view-billing.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Billing &amp; Plans">Billing &amp; Plans</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-user-view-notifications.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Notifications">Notifications</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-user-view-connections.html" class="menu-link">
                                    <div class="text-truncate" data-i18n="Connections">Connections</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li></>
    )
}
export default User;