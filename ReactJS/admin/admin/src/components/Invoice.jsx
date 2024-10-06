import React from "react";

const Invoice = () => {
    return (
        <>
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-food-menu"></i>
                    <div class="text-truncate" data-i18n="Invoice">Invoice</div>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="app-invoice-list.html" class="menu-link">
                            <div class="text-truncate" data-i18n="List">List</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="app-invoice-preview.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Preview">Preview</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="app-invoice-edit.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Edit">Edit</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="app-invoice-add.html" class="menu-link">
                            <div class="text-truncate" data-i18n="Add">Add</div>
                        </a>
                    </li>
                </ul>
            </li>


        </>
    )
}
export default Invoice;