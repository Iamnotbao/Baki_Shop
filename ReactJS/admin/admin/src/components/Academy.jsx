import React from "react";

const Academy = () => {
    return (
        <>
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-book-open"></i>
                    <div class="text-truncate" data-i18n="Academy">Academy</div>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="app-academy-dashboard.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Dashboard">Dashboard</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="app-academy-course.html" class="menu-link">
                            <div class="text-truncate" data-i18n="My Course">My Course</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="app-academy-course-details.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Course Details">Course Details</div>
                        </a>
                    </li>
                </ul>
            </li></>
    )
}
export default Academy;