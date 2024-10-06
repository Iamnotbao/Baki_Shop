import React from "react";

const Role_Permission = () => {
    return (
        <>
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-check-shield"></i>
                    <div class="text-truncate" data-i18n="Roles &amp; Permissions">Roles &amp; Permissions</div>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="app-access-roles.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Roles">Roles</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="app-access-permission.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Permission">Permission</div>
                        </a>
                    </li>
                </ul>
            </li>
        </>
    )
}
export default Role_Permission;