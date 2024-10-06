import React from "react";

const Layouts = () => {
    return (
        <>
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-layout"></i>
                    <div class="text-truncate" data-i18n="Layouts">Layouts</div>
                </a>

                <ul class="menu-sub">

                    <li class="menu-item">
                        <a href="layouts-collapsed-menu.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Collapsed menu">Collapsed menu</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="layouts-content-navbar.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Content navbar">Content navbar</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="layouts-content-navbar-with-sidebar.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Content nav + Sidebar">Content nav + Sidebar</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="../horizontal-menu-template" class="menu-link" target="_blank">
                            <div class="text-truncate" data-i18n="Horizontal">Horizontal</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="layouts-without-menu.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Without menu">Without menu</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="layouts-without-navbar.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Without navbar">Without navbar</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="layouts-fluid.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Fluid">Fluid</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="layouts-container.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Container">Container</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="layouts-blank.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Blank">Blank</div>
                        </a>
                    </li>
                </ul>
            </li>

        </>
    )
}
export default Layouts;