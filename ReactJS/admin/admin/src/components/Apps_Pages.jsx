import React from "react";

const Apps_Pages = () => {
    return (
        <>
            <li class="menu-header small text-uppercase">
                <span class="menu-header-text" data-i18n="Apps &amp; Pages">Apps &amp; Pages</span>
            </li>
            <li class="menu-item">
                <a href="app-email.html" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-envelope"></i>
                    <div class="text-truncate" data-i18n="Email">Email</div>
                </a>
            </li>
            <li class="menu-item">
                <a href="app-chat.html" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-chat"></i>
                    <div class="text-truncate" data-i18n="Chat">Chat</div>
                </a>
            </li>
            <li class="menu-item">
                <a href="app-calendar.html" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-calendar"></i>
                    <div class="text-truncate" data-i18n="Calendar">Calendar</div>
                </a>
            </li>
            <li class="menu-item">
                <a href="app-kanban.html" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-grid"></i>
                    <div class="text-truncate" data-i18n="Kanban">Kanban</div>
                </a>
            </li></>
    )
}
export default Apps_Pages;