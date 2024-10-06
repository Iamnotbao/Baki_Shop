import React, { useRef, useState } from "react"
import axios from "axios";
import AddConFirm from "./AddConfirm";

const Ecommerce_Products_Add = () => {
    const [popup, setPopup] = useState(false);
    const [message, setMessage] = useState("Add Failed!!!");
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        discount: "",
        rating: "",
        images: {
            public_id: "",
            url: ""
        },
        category: "",
        stock: 0,
        // numOfReviews: "",
        // reviews: "",
        // createAt: ""
    }
    );
    const token = localStorage.getItem("token");
    console.log("key is:", token);

    const [addStock, setAddStock] = useState(0);
    const [check, setCheck] = useState(false);
    const [addCategory, setAddCategory] = useState("Select your category")
    const img = useRef(null);




    console.log(addCategory)
    const handleImgClick = () => {
        img.current.click();
    }
    function fileChange(event) {
        const file = event.target.files[0].name;
        const baseUrl = "../public/images/";
        const path = `${baseUrl}${file}`;
        setProduct(prev => ({
            ...prev,
            images: {
                ...prev.images,
                url: path
            }
        }))

    }

    function handlePublic_ID(event) {
        const { name, value } = event.target;
        setProduct(prev => ({
            ...prev,
            images: {
                ...prev.images,
                [name]: value
            }
        }));
    }


    function handleCategory(event) {
        const category = event.target.value;
        setAddCategory(category);
        setProduct((prev => ({
            ...prev,
            category: category
        })));
    }
    function handleCheck() {
        setCheck(true);
    }

    function handleChangeStock(event) {
        setAddStock(Number(event.target.value));
    }
    function handleAddStock() {
        const stock = Number(product.stock) + addStock;
        setProduct(prev => ({
            ...prev,
            stock: stock
        }))
        setAddStock(0);

    }
    console.log(product);

    function handleClosePopup() {
        setPopup(false);
    }
    async function handleAddProduct() {
        console.log("click");
        try {
            const response = await axios.post("http://localhost:3000/api/products/createProduct", product,
                {
                    headers: {
                        Authorization: `bearer ${JSON.parse(token)}`,
                        "Content-Type": "application/json"
                    }
                }


            )
            console.log(response.data);
            if (response.data) {
                console.log("ok");
                setPopup(true);
                setMessage("Add Successfully!!!")

            } else {
                console.log("no data");
            }
            setProduct(
                {
                    name: "",
                    description: "",
                    price: "",
                    discount: "",
                    rating: "",
                    images: {
                        public_id: "",
                        url: ""
                    },
                    category: "",
                    stock: 0,
                }
            )
        }
        catch (err) {
            console.log(err);

        }

    }

    return (
        <>
            <div>
                {/* <!-- Navbar --> */}

                <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                    <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0   d-xl-none ">
                        <a className="nav-item nav-link px-0 me-xl-6" href="">
                            <i className="bx bx-menu bx-md"></i>
                        </a>
                    </div>
                    <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                        {/* <!-- Search --> */}
                        <div className="navbar-nav align-items-center">
                            <div className="nav-item navbar-search-wrapper mb-0">
                                <a className="nav-item nav-link search-toggler px-0" href="#">
                                    <i className="bx bx-search bx-md"></i>
                                    <span className="d-none d-md-inline-block text-muted fw-normal ms-4">Search (Ctrl+/)</span>
                                </a>
                            </div>
                        </div>
                        {/* <!-- /Search --> */}





                        <ul className="navbar-nav flex-row align-items-center ms-auto">




                            {/* <!-- Language --> */}
                            <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                                <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                                    <i className="bx bx-globe bx-md"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a className="dropdown-item active" href="#" data-language="en" data-text-direction="ltr">
                                            <span>English</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" data-language="fr" data-text-direction="ltr">
                                            <span>French</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" data-language="ar" data-text-direction="rtl">
                                            <span>Arabic</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" data-language="de" data-text-direction="ltr">
                                            <span>German</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- /Language -->


                            <!-- Style Switcher --> */}
                            <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                                <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                                    <i className="bx bx-md bx-sun"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                                    <li>
                                        <a className="dropdown-item active" href="#" data-theme="light">
                                            <span><i className="bx bx-sun bx-md me-3"></i>Light</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" data-theme="dark">
                                            <span><i className="bx bx-moon bx-md me-3"></i>Dark</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" data-theme="system">
                                            <span><i className="bx bx-desktop bx-md me-3"></i>System</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- / Style Switcher-->


                            <!-- Quick links  --> */}
                            <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                                <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <i className="bx bx-grid-alt bx-md"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end p-0">
                                    <div className="dropdown-menu-header border-bottom">
                                        <div className="dropdown-header d-flex align-items-center py-3">
                                            <h6 className="mb-0 me-auto">Shortcuts</h6>
                                            <a href="" className="dropdown-shortcuts-add py-2" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add shortcuts" data-bs-original-title="Add shortcuts"><i className="bx bx-plus-circle text-heading"></i></a>
                                        </div>
                                    </div>
                                    <div className="dropdown-shortcuts-list scrollable-container ps">
                                        <div className="row row-bordered overflow-visible g-0">
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="bx bx-calendar bx-26px text-heading"></i>
                                                </span>
                                                <a href="app-calendar.html" className="stretched-link">Calendar</a>
                                                <small>Appointments</small>
                                            </div>
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="bx bx-food-menu bx-26px text-heading"></i>
                                                </span>
                                                <a href="app-invoice-list.html" className="stretched-link">Invoice App</a>
                                                <small>Manage Accounts</small>
                                            </div>
                                        </div>
                                        <div className="row row-bordered overflow-visible g-0">
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="bx bx-user bx-26px text-heading"></i>
                                                </span>
                                                <a href="app-user-list.html" className="stretched-link">User App</a>
                                                <small>Manage Users</small>
                                            </div>
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="bx bx-check-shield bx-26px text-heading"></i>
                                                </span>
                                                <a href="app-access-roles.html" className="stretched-link">Role Management</a>
                                                <small>Permission</small>
                                            </div>
                                        </div>
                                        <div className="row row-bordered overflow-visible g-0">
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="bx bx-pie-chart-alt-2 bx-26px text-heading"></i>
                                                </span>
                                                <a href="index.html" className="stretched-link">Dashboard</a>
                                                <small>User Dashboard</small>
                                            </div>
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="bx bx-cog bx-26px text-heading"></i>
                                                </span>
                                                <a href="pages-account-settings-account.html" className="stretched-link">Setting</a>
                                                <small>Account Settings</small>
                                            </div>
                                        </div>
                                        <div className="row row-bordered overflow-visible g-0">
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="bx bx-help-circle bx-26px text-heading"></i>
                                                </span>
                                                <a href="pages-faq.html" className="stretched-link">FAQs</a>
                                                <small>FAQs &amp; Articles</small>
                                            </div>
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="bx bx-window-open bx-26px text-heading"></i>
                                                </span>
                                                <a href="modal-examples.html" className="stretched-link">Modals</a>
                                                <small>Useful Popups</small>
                                            </div>
                                        </div>
                                        <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex="0" style={{ left: '0px', bottom: '0px' }}></div></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}
                                        ><div className="ps__thumb-y" tabIndex="0" style={{ left: '0px', bottom: '0px' }}></div></div></div>
                                </div>
                            </li>
                            {/* <!-- Quick links -->

                            <!-- Notification --> */}
                            <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                                <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <span className="position-relative">
                                        <i className="bx bx-bell bx-md"></i>
                                        <span className="badge rounded-pill bg-danger badge-dot badge-notifications border"></span>
                                    </span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end p-0">
                                    <li className="dropdown-menu-header border-bottom">
                                        <div className="dropdown-header d-flex align-items-center py-3">
                                            <h6 className="mb-0 me-auto">Notification</h6>
                                            <div className="d-flex align-items-center h6 mb-0">
                                                <span className="badge bg-label-primary me-2">8 New</span>
                                                <a href="" className="dropdown-notifications-all p-2" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Mark all as read" data-bs-original-title="Mark all as read"><i className="bx bx-envelope-open text-heading"></i></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown-notifications-list scrollable-container ps">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src="../../assets/img/avatars/1.png" alt="" className="rounded-circle" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="small mb-0">Congratulation Lettie 🎉</h6>
                                                        <small className="mb-1 d-block text-body">Won the monthly best seller gold badge</small>
                                                        <small className="text-muted">1h ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                        <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <span className="avatar-initial rounded-circle bg-label-danger">CF</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="small mb-0">Charles Franklin</h6>
                                                        <small className="mb-1 d-block text-body">Accepted your connection</small>
                                                        <small className="text-muted">12hr ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                        <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src="../../assets/img/avatars/2.png" alt="" className="rounded-circle" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="small mb-0">New Message ✉️</h6>
                                                        <small className="mb-1 d-block text-body">You have new message from Natalie</small>
                                                        <small className="text-muted">1h ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                        <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <span className="avatar-initial rounded-circle bg-label-success"><i className="bx bx-cart"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="small mb-0">Whoo! You have new order 🛒 </h6>
                                                        <small className="mb-1 d-block text-body">ACME Inc. made new order $1,154</small>
                                                        <small className="text-muted">1 day ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                        <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src="../../assets/img/avatars/9.png" alt="" className="rounded-circle" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="small mb-0">Application has been approved 🚀 </h6>
                                                        <small className="mb-1 d-block text-body">Your ABC project application has been approved.</small>
                                                        <small className="text-muted">2 days ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                        <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <span className="avatar-initial rounded-circle bg-label-success"><i className="bx bx-pie-chart-alt"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="small mb-0">Monthly report is generated</h6>
                                                        <small className="mb-1 d-block text-body">July monthly financial report is generated </small>
                                                        <small className="text-muted">3 days ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                        <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src="../../assets/img/avatars/5.png" alt="" className="rounded-circle" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="small mb-0">Send connection request</h6>
                                                        <small className="mb-1 d-block text-body">Peter sent you connection request</small>
                                                        <small className="text-muted">4 days ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                        <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src="../../assets/img/avatars/6.png" alt="" className="rounded-circle" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="small mb-0">New message from Jane</h6>
                                                        <small className="mb-1 d-block text-body">Your have new message from Jane</small>
                                                        <small className="text-muted">5 days ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                        <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <span className="avatar-initial rounded-circle bg-label-warning"><i className="bx bx-error"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="small mb-0">CPU is running high</h6>
                                                        <small className="mb-1 d-block text-body">CPU Utilization Percent is currently at 88.63%,</small>
                                                        <small className="text-muted">5 days ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                        <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}><div className="ps__thumb-x" tabIndex="0" style={{ left: "0px", width: "0px" }}></div></div><div className="ps__rail-y" style={{ top: "0px", right: "0px" }}><div className="ps__thumb-y" tabIndex="0" style={{ top: "0px", height: "0px" }}></div></div></li>
                                    <li className="border-top">
                                        <div className="d-grid p-4">
                                            <a className="btn btn-primary btn-sm d-flex" href="#">
                                                <small className="align-middle">View all notifications</small>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            {/* <!--/ Notification -->
                            <!-- User --> */}
                            <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                <a className="nav-link dropdown-toggle hide-arrow p-0" href="#" data-bs-toggle="dropdown">
                                    <div className="avatar avatar-online">
                                        <img src="../../assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a className="dropdown-item" href="pages-account-settings-account.html">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar avatar-online">
                                                        <img src="../../assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-0">John Doe</h6>
                                                    <small className="text-muted">Admin</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider my-1"></div>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="pages-profile-user.html">
                                            <i className="bx bx-user bx-md me-3"></i><span>My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="pages-account-settings-account.html">
                                            <i className="bx bx-cog bx-md me-3"></i><span>Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="pages-account-settings-billing.html">
                                            <span className="d-flex align-items-center align-middle">
                                                <i className="flex-shrink-0 bx bx-credit-card bx-md me-3"></i><span className="flex-grow-1 align-middle">Billing Plan</span>
                                                <span className="flex-shrink-0 badge rounded-pill bg-danger">4</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider my-1"></div>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="pages-pricing.html">
                                            <i className="bx bx-dollar bx-md me-3"></i><span>Pricing</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="pages-faq.html">
                                            <i className="bx bx-help-circle bx-md me-3"></i><span>FAQ</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider my-1"></div>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="auth-login-cover.html" target="_blank">
                                            <i className="bx bx-power-off bx-md me-3"></i><span>Log Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!--/ User --> */}


                        </ul>
                    </div>


                    {/* <!-- Search Small Screens --> */}
                    <div className="navbar-search-wrapper search-input-wrapper d-none">
                        <span className="twitter-typeahead" style={{ position: "relative", display: "inline-block" }}><input type="text" className="form-control search-input container-xxl border-0 tt-input" placeholder="Search..." aria-label="Search..." autoComplete="off" spellCheck="false" dir="auto" />
                            <pre aria-hidden="true" style={{
                                fontSize: '15px',
                                wordSpacing: '0px',
                                textIndent: '0px',
                                textRendering: 'auto',
                                textTransform: 'none'
                            }}></pre><div className="tt-menu navbar-search-suggestion ps" style={{
                                position: 'absolute',
                                top: '100%',
                                left: '0px',
                                zIndex: 100,
                                display: 'none'
                            }}
                            ><div className="tt-dataset tt-dataset-pages"></div><div className="tt-dataset tt-dataset-files"></div><div className="tt-dataset tt-dataset-members"></div><div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}><div className="ps__thumb-x" tabIndex="0" style={{ left: "0px", width: "0px" }}></div></div><div className="ps__rail-y" style={{ top: "0px", right: "0px" }}><div className="ps__thumb-y" tabIndex="0" style={{ top: "0px", height: "0px" }}></div></div></div></span>
                        <i className="bx bx-x bx-md search-toggler cursor-pointer"></i>
                    </div>


                </nav>



                {/* <!-- / Navbar -->



                <!-- Content wrapper --> */}
                <div className="content-wrapper">

                    {/* <!-- Content --> */}

                    <div className="container-xxl flex-grow-1 container-p-y">


                        <div className="app-ecommerce">

                            {/* <!-- Add Product --> */}
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-6 row-gap-4">

                                <div className="d-flex flex-column justify-content-center">
                                    <h4 className="mb-1">Add a new Product</h4>
                                    <p className="mb-0">Orders placed across your store</p>
                                </div>
                                <div className="d-flex align-content-center flex-wrap gap-4">
                                    <div className="d-flex gap-4"><button className="btn btn-label-secondary">Discard</button>
                                        <button className="btn btn-label-primary">Save draft</button></div>
                                    <button className="btn btn-primary" onClick={handleAddProduct}>Publish product</button>
                                </div>

                            </div>

                            <div className="row">

                                {/* <!-- First column--> */}
                                <div className="col-12 col-lg-8">
                                    {/* <!-- Product Information --> */}
                                    <div className="card mb-6">
                                        <div className="card-header">
                                            <h5 className="card-tile mb-0">Product information</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="mb-6">
                                                <label className="form-label" htmlFor="ecommerce-product-name">Name</label>
                                                <input type="text" className="form-control" id="ecommerce-product-name" placeholder="Product title" name="name" aria-label="Product title"
                                                    value={product.name}
                                                    onChange={(ev) => setProduct(prev => ({
                                                        ...prev,
                                                        [ev.target.name]: ev.target.value
                                                    }))} />
                                            </div>
                                            {/* <div className="row mb-6">
                                                <div className="col"><label className="form-label" htmlFor="ecommerce-product-sku">SKU</label>
                                                    <input type="number" className="form-control" id="ecommerce-product-sku" placeholder="SKU" name="productSku" aria-label="Product SKU" /></div>
                                                <div className="col"><label className="form-label" htmlFor="ecommerce-product-barcode">Barcode</label>
                                                    <input type="text" className="form-control" id="ecommerce-product-barcode" placeholder="0123-4567" name="productBarcode" aria-label="Product barcode" /></div>
                                            </div> */}
                                            {/* <!-- Description --> */}
                                            <div>
                                                <label className="mb-1">Description (Optional)</label>
                                                <div className="form-control p-0">
                                                    <div className="comment-toolbar border-0 border-bottom ql-toolbar ql-snow">
                                                        <div className="d-flex justify-content-start">
                                                            <span className="ql-formats me-0">
                                                                <button className="ql-bold" type="button"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path> <path className="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path> </svg></button>
                                                                <button className="ql-italic" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line> <line className="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line> <line className="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line> </svg></button>
                                                                <button className="ql-underline" type="button"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"></path> <rect className="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"></rect> </svg></button>
                                                                <button className="ql-list" value="ordered" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1="7" x2="15" y1="4" y2="4"></line> <line className="ql-stroke" x1="7" x2="15" y1="9" y2="9"></line> <line className="ql-stroke" x1="7" x2="15" y1="14" y2="14"></line> <line className="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"></line> <path className="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path> <path className="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"></path> <path className="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"></path> </svg></button>
                                                                <button className="ql-list" value="bullet" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1="6" x2="15" y1="4" y2="4"></line> <line className="ql-stroke" x1="6" x2="15" y1="9" y2="9"></line> <line className="ql-stroke" x1="6" x2="15" y1="14" y2="14"></line> <line className="ql-stroke" x1="3" x2="3" y1="4" y2="4"></line> <line className="ql-stroke" x1="3" x2="3" y1="9" y2="9"></line> <line className="ql-stroke" x1="3" x2="3" y1="14" y2="14"></line> </svg></button>
                                                                <button className="ql-link" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line> <path className="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"></path> <path className="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"></path> </svg></button>
                                                                <button className="ql-image" type="button"><svg viewBox="0 0 18 18"> <rect className="ql-stroke" height="10" width="12" x="3" y="4"></rect> <circle className="ql-fill" cx="6" cy="7" r="1"></circle> <polyline className="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg></button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="comment-editor border-0 pb-6 ql-container ql-snow" id="ecommerce-category-description"><div className="ql-editor ql-blank" data-gramm="false" data-placeholder="Product Description"><p><br /></p></div><div className="ql-clipboard" tabIndex="-1"></div><div className="ql-tooltip ql-hidden"><a className="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>
                                                        <input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL" value={product.description} name="description" onChange={(event) => setProduct(prev => ({
                                                            ...prev,
                                                            [event.target.name]: event.target.value
                                                        }))} />
                                                        <a className="ql-action"></a>
                                                        <a className="ql-remove"></a>
                                                    </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Product Information -->
                                    <!-- Media --> */}
                                    <div className="card mb-6">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h5 className="mb-0 card-title">Product Image</h5>
                                            <a href="#" className="fw-medium">Add media from URL</a>
                                        </div>
                                        <div className="card-body">
                                            <form action="/upload" className="dropzone needsclick p-0 dz-clickable" id="dropzone-basic">
                                                <input type="text" placeholder="Type your public_id" name="public_id" value={product.images.public_id} required onChange={handlePublic_ID} />
                                                <div className="dz-message needsclick">
                                                    <p className="h4 needsclick pt-4 mb-2">Drag and drop your image here</p>
                                                    <p className="h6 text-muted d-block fw-normal mb-2">or</p>
                                                    <span className="note needsclick btn btn-sm btn-label-primary" id="btnBrowse" onClick={handleImgClick}>Browse image</span>
                                                </div>

                                                <input
                                                    type="file"
                                                    style={{ display: 'none' }}
                                                    ref={img}
                                                    onChange={fileChange}
                                                />
                                            </form>
                                        </div>
                                    </div>
                                    {/* <!-- /Media -->
                                    <!-- Variants --> */}
                                    {/* <div className="card mb-6">
                                        <div className="card-header">
                                            <h5 className="card-title mb-0">Variants</h5>
                                        </div>
                                        <div className="card-body">
                                            <form className="form-repeater">
                                                <div data-repeater-list="group-a">
                                                    <div data-repeater-item="">
                                                        <div className="row g-6 mb-6">

                                                            <div className="col-4">
                                                                <label className="form-label" htmlFor="form-repeater-1-1">Options</label>
                                                                <div className="position-relative"><select id="form-repeater-1-1" className="select2 form-select select2-hidden-accessible" data-placeholder="Size" data-select2-id="form-repeater-1-1" tabIndex="-1" aria-hidden="true">
                                                                    <option value="" data-select2-id="2">Size</option>
                                                                    <option value="size">Size</option>
                                                                    <option value="color">Color</option>
                                                                    <option value="weight">Weight</option>
                                                                    <option value="smell">Smell</option>
                                                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style={{ width: "223.062px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-form-repeater-1-1-container"><span className="select2-selection__rendered" id="select2-form-repeater-1-1-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Size</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span></div>
                                                            </div>

                                                            <div className="col-8">
                                                                <label className="form-label invisible" htmlFor="form-repeater-1-2">Not visible</label>
                                                                <input type="number" id="form-repeater-1-2" className="form-control" placeholder="Enter size" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="btn btn-primary" data-repeater-create="">
                                                        <i className="bx bx-plus bx-sm me-2"></i>
                                                        Add another option
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div> */}
                                    {/* <!-- /Variants -->
                                    <!-- Inventory --> */}
                                    <div className="card mb-6">
                                        <div className="card-header">
                                            <h5 className="card-title mb-0">Inventory</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                {/* <!-- Navigation --> */}
                                                <div className="col-12 col-md-4 col-xl-5 col-xxl-4 mx-auto card-separator">
                                                    <div className="d-flex justify-content-between flex-column mb-4 mb-md-0 pe-md-4">
                                                        <div className="nav-align-left">
                                                            <ul className="nav nav-pills flex-column w-100" role="tablist">
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#restock" aria-selected="true" role="tab">
                                                                        <i className="bx bx-cube bx-sm me-1_5"></i>
                                                                        <span className="align-middle">Restock</span>
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#shipping" aria-selected="false" tabIndex="-1" role="tab">
                                                                        <i className="bx bx-car bx-sm me-1_5"></i>
                                                                        <span className="align-middle">Shipping</span>
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#global-delivery" aria-selected="false" tabIndex="-1" role="tab">
                                                                        <i className="bx bx-globe bx-sm me-1_5"></i>
                                                                        <span className="align-middle">Global Delivery</span>
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#attributes" aria-selected="false" tabIndex="-1" role="tab">
                                                                        <i className="bx bx-link bx-sm me-1_5"></i>
                                                                        <span className="align-middle">Attributes</span>
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#advanced" aria-selected="false" tabIndex="-1" role="tab">
                                                                        <i className="bx bx-lock bx-sm me-1_5"></i>
                                                                        <span className="align-middle">Advanced</span>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- /Navigation -->
                                                <!-- Options --> */}
                                                <div className="col-12 col-md-8 col-xl-7 col-xxl-8 pt-6 pt-md-0">
                                                    <div className="tab-content p-0 ps-md-4">
                                                        {/* <!-- Restock Tab --> */}
                                                        <div className="tab-pane fade show active" id="restock" role="tabpanel">
                                                            <h6 className="text-body">Options</h6>
                                                            <label className="form-label" htmlFor="ecommerce-product-stock">Add to Stock</label>
                                                            <div className="row mb-4 g-4 pe-md-4">
                                                                <div className="col-12 col-sm-9">
                                                                    <input type="number" className="form-control" id="ecommerce-product-stock" placeholder="Quantity" name="stock" aria-label="Quantity"
                                                                        onChange={handleChangeStock}
                                                                    /></div>
                                                                <div className="col-12 col-sm-3">
                                                                    <button className="btn btn-primary" type="submit" onClick={handleAddStock}>Confirm</button>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-2 fw-normal">Product in stock now: <span className="text-body">{product.stock}</span></h6>
                                                                <h6 className="mb-2 fw-normal">Product in transit: <span className="text-body">390</span></h6>
                                                                <h6 className="mb-2 fw-normal">Last time restocked: <span className="text-body">24th June, 2023</span></h6>
                                                                <h6 className="mb-0 fw-normal">Total stock over lifetime: <span className="text-body">2430</span></h6>
                                                            </div>
                                                        </div>
                                                        {/* <!-- Shipping Tab --> */}
                                                        <div className="tab-pane fade" id="shipping" role="tabpanel">
                                                            <h6 className="mb-3 text-body">Shipping Type</h6>
                                                            <div>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" name="shippingType" id="seller" />
                                                                    <label className="form-check-label" htmlFor="seller">
                                                                        <span className="mb-1 h6">Fulfilled by Seller</span><br />
                                                                        <small>You'll be responsible htmlFor product delivery.<br />
                                                                            Any damage or delay during shipping may cost you a Damage fee.</small>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check mb-6">
                                                                    <input className="form-check-input" type="radio" name="shippingType" id="companyName" />
                                                                    <label className="form-check-label" htmlFor="companyName">
                                                                        <span className="mb-1 h6">Fulfilled by Company name &nbsp;<span className="badge rounded-2 badge-warning bg-label-warning fs-tiny py-1">RECOMMENDED</span></span><br />
                                                                        <small>Your product, Our responsibility.<br />
                                                                            htmlFor a measly fee, we will handle the delivery process htmlFor you.</small>
                                                                    </label>
                                                                </div>
                                                                <p className="mb-0">See our <a href="#">Delivery terms and conditions</a> htmlFor details</p>
                                                            </div>
                                                        </div>
                                                        {/* <!-- Global Delivery Tab --> */}
                                                        <div className="tab-pane fade" id="global-delivery" role="tabpanel">
                                                            <h6 className="mb-3 text-body">Global Delivery</h6>
                                                            {/* <!-- Worldwide delivery --> */}
                                                            <div className="form-check mb-4">
                                                                <input className="form-check-input" type="radio" name="globalDel" id="worldwide" />
                                                                <label className="form-check-label" htmlFor="worldwide">
                                                                    <span className="mb-1 h6">Worldwide delivery</span><br />
                                                                    <small>Only available with Shipping method:
                                                                        <a href="#">Fulfilled by Company name</a></small>
                                                                </label>
                                                            </div>
                                                            {/* <!-- Global delivery --> */}
                                                            <div className="form-check mb-4">
                                                                <input className="form-check-input" type="radio" name="globalDel" checked={handleCheck} />
                                                                <label className="form-check-label w-75 pe-12" htmlFor="country-selected">
                                                                    <span className="mb-2 h6">Selected Countries</span>
                                                                    <input type="text" className="form-control" placeholder="Type Country name" id="country-selected" />
                                                                </label>
                                                            </div>
                                                            {/* <!-- Local delivery --> */}
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="globalDel" id="local" />
                                                                <label className="form-check-label" htmlFor="local">
                                                                    <span className="mb-1 h6">Local delivery</span><br />
                                                                    <small>Deliver to your country of residence :
                                                                        <a href="#">Change profile address</a></small>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {/* <!-- Attributes Tab --> */}
                                                        <div className="tab-pane fade" id="attributes" role="tabpanel">
                                                            <h6 className="mb-2 text-body">Attributes</h6>
                                                            <div>
                                                                {/* <!-- Fragile Product --> */}
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="checkbox" value="fragile" id="fragile" />
                                                                    <label className="form-check-label" htmlFor="fragile">
                                                                        <span className="fw-medium">Fragile Product</span>
                                                                    </label>
                                                                </div>
                                                                {/* <!-- Biodegradable --> */}
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="checkbox" value="biodegradable" id="biodegradable" />
                                                                    <label className="form-check-label" htmlFor="biodegradable">
                                                                        <span className="fw-medium">Biodegradable</span>
                                                                    </label>
                                                                </div>
                                                                {/* <!-- Frozen Product --> */}
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="checkbox" value="frozen" checked={handleCheck} />
                                                                    <label className="form-check-label w-75 pe-12" htmlFor="frozen">
                                                                        <span className="mb-1 h6">Frozen Product</span>
                                                                        <input type="number" className="form-control" placeholder="Max. allowed Temperature" id="frozen" />
                                                                    </label>
                                                                </div>
                                                                {/* <!-- Exp Date --> */}
                                                                <div className="form-check mb-6">
                                                                    <input className="form-check-input" type="checkbox" value="expDate" id="expDate" checked={handleCheck} />
                                                                    <label className="form-check-label w-75 pe-12" htmlFor="date-input">
                                                                        <span className="mb-1 h6">Expiry Date of Product</span>
                                                                        <input type="text" className="product-date form-control flatpickr-input" id="date-input" readonly="readonly" />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- /Attributes Tab -->
                                                        <!-- Advanced Tab --> */}
                                                        <div className="tab-pane fade" id="advanced" role="tabpanel">
                                                            <h6 className="mb-3 text-body">Advanced</h6>
                                                            <div className="row">
                                                                {/* <!-- Product Id Type --> */}
                                                                <div className="col">
                                                                    <label className="form-label" htmlFor="product-id">
                                                                        <span className="mb-1 h6">Product ID Type</span>
                                                                    </label>
                                                                    <div className="position-relative"><select id="product-id" className="select2 form-select select2-hidden-accessible" data-placeholder="ISBN" data-select2-id="product-id" tabIndex="-1" aria-hidden="true">
                                                                        <option value="" data-select2-id="4">ISBN</option>
                                                                        <option value="ISBN">ISBN</option>
                                                                        <option value="UPC">UPC</option>
                                                                        <option value="EAN">EAN</option>
                                                                        <option value="JAN">JAN</option>
                                                                    </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="3" style={{ width: "auto" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-product-id-container"><span className="select2-selection__rendered" id="select2-product-id-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">ISBN</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span></div>
                                                                </div>
                                                                {/* <!-- Product Id --> */}
                                                                <div className="col">
                                                                    <label className="form-label" htmlFor="product-id-1">
                                                                        <span className="mb-1 h6">Product ID</span>
                                                                    </label>
                                                                    <input type="number" id="product-id-1" className="form-control" placeholder="ISBN Number" />
                                                                </div>

                                                            </div>
                                                        </div>
                                                        {/* <!-- /Advanced Tab --> */}

                                                    </div>
                                                </div>
                                                {/* <!-- /Options--> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Inventory --> */}
                                </div>
                                {/* <!-- /Second column -->

                                <!-- Second column --> */}
                                <div className="col-12 col-lg-4">
                                    {/* <!-- Pricing Card --> */}
                                    <div className="card mb-6">
                                        <div className="card-header">
                                            <h5 className="card-title mb-0">Pricing</h5>
                                        </div>
                                        <div className="card-body">
                                            {/* <!-- Base Price --> */}
                                            <div className="mb-6">
                                                <label className="form-label" htmlFor="ecommerce-product-price">Base Price</label>
                                                <input type="number" className="form-control" id="ecommerce-product-price" placeholder="Price" value={product.price} name="price" aria-label="Product price" onChange={(event) => setProduct(prev => ({
                                                    ...prev,
                                                    [event.target.name]: event.target.value

                                                }))} />
                                            </div>
                                            {/* <!-- Discounted Price --> */}
                                            <div className="mb-6">
                                                <label className="form-label" htmlFor="ecommerce-product-discount-price">Discounted Price</label>
                                                <input type="number" className="form-control" id="ecommerce-product-discount-price" placeholder="Discounted Price" aria-label="Product discounted price" name="discount"
                                                    value={product.discount} onChange={(event) => setProduct(prev => ({
                                                        ...prev,
                                                        [event.target.name]: event.target.value
                                                    }))} />
                                            </div>
                                            {/* <!-- Charge tax check box --> */}
                                            <div className="form-check ms-2 mt-7 mb-4">
                                                <input className="form-check-input" type="checkbox" value="" id="price-charge-tax" checked={handleCheck} />
                                                <label className="switch-label" htmlFor="price-charge-tax">
                                                    Charge tax on this product
                                                </label>
                                            </div>
                                            {/* <!-- Instock switch --> */}
                                            <div className="d-flex justify-content-between align-items-center border-top pt-2">
                                                <span className="mb-0">In stock</span>
                                                <div className="w-25 d-flex justify-content-end">
                                                    <div className="form-check form-switch me-n3">
                                                        <input type="checkbox" className="form-check-input" checked={handleCheck} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Pricing Card -->
                                    <!-- Organize Card --> */}
                                    <div className="card mb-6">
                                        <div className="card-header">
                                            <h5 className="card-title mb-0">Organize</h5>
                                        </div>
                                        <div className="card-body">
                                            {/* <!-- Vendor --> */}
                                            {/* <div className="mb-6 col ecommerce-select2-dropdown">
                                                <label className="form-label mb-1" htmlFor="vendor">
                                                    Vendor
                                                </label>
                                                <div className="position-relative"><select id="vendor" className="select2 form-select select2-hidden-accessible" data-placeholder="Select Vendor" data-select2-id="vendor" tabIndex="-1" aria-hidden="true">
                                                    <option value="" data-select2-id="6">Select Vendor</option>
                                                    <option value="men-clothing">Men's Clothing</option>
                                                    <option value="women-clothing">Women's-clothing</option>
                                                    <option value="kid-clothing">Kid's-clothing</option>
                                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5" style={{ width: "321.6px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-vendor-container"><span className="select2-selection__rendered" id="select2-vendor-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select Vendor</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span></div>
                                            </div> */}
                                            {/* <!-- Category --> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="mb-6 col ecommerce-select2-dropdown">
                                                    <label className="form-label mb-1" htmlFor="category-org">
                                                        <span>Category</span>
                                                    </label>
                                                    <div className="position-relative">
                                                        <select id="category-org" className="select2 form-select select2-hidden-accessible" data-select2-id="category-org" tabIndex="-1" value={addCategory} onChange={handleCategory} >
                                                            <option value="" data-select2-id="8">Select Category</option>
                                                            <option value="Apparel">Apparel</option>
                                                            <option value="Pants">Pants</option>
                                                            <option value="Shirt">Shirt</option>
                                                            <option value="Jacket">Jacket</option>
                                                        </select>
                                                        <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="7" style={{ width: "267.6px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-category-org-container"><span className="select2-selection__rendered" id="select2-category-org-container" role="textbox" aria-readonly="true">

                                                        </span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span></div>
                                                </div>
                                                <a href="#" className="fw-medium btn btn-icon btn-label-primary ms-4"><i className="bx bx-plus bx-md"></i></a>
                                            </div>
                                            {/* <!-- Collection --> */}
                                            {/* <div className="mb-6 col ecommerce-select2-dropdown">
                                                <label className="form-label mb-1" htmlFor="collection">Collection
                                                </label>
                                                <div className="position-relative"><select id="collection" className="select2 form-select select2-hidden-accessible" data-placeholder="Collection" data-select2-id="collection" tabIndex="-1" aria-hidden="true">
                                                    <option value="" data-select2-id="10">Collection</option>
                                                    <option value="men-clothing">Men's Clothing</option>
                                                    <option value="women-clothing">Women's-clothing</option>
                                                    <option value="kid-clothing">Kid's-clothing</option>
                                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="9" style={{ width: "321.6px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-collection-container"><span className="select2-selection__rendered" id="select2-collection-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Collection</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span></div>
                                            </div> */}
                                            {/* <!-- Status --> */}
                                            {/* <div className="mb-6 col ecommerce-select2-dropdown">
                                                <label className="form-label mb-1" htmlFor="status-org">Status
                                                </label>
                                                <div className="position-relative"><select id="status-org" className="select2 form-select select2-hidden-accessible" data-placeholder="Published" data-select2-id="status-org" tabIndex="-1" aria-hidden="true">
                                                    <option value="" data-select2-id="12">Published</option>
                                                    <option value="Published">Published</option>
                                                    <option value="Scheduled">Scheduled</option>
                                                    <option value="Inactive">Inactive</option>
                                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="11" style={{ width: "321.6px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-status-org-container"><span className="select2-selection__rendered" id="select2-status-org-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Published</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span></div>
                                            </div> */}
                                            {/* <!-- Tags --> */}
                                            {/* <div>
                                                <label htmlFor="ecommerce-product-tags" className="form-label mb-1">Tags</label>
                                                <tags className="tagify  form-control" tabIndex="-1">
                                                    <tag title="Normal" contentEditable="false" spellCheck="false" tabIndex="-1" className="tagify__tag tagify--noAnim" value="Normal"><x title="" className="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x><div><span className="tagify__tag-text">Normal</span></div></tag><tag title="Standard" contentEditable="false" spellCheck="false" tabIndex="-1" className="tagify__tag tagify--noAnim" value="Standard"><x title="" className="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x><div><span className="tagify__tag-text">Standard</span></div></tag><tag title="Premium" contentEditable="false" spellCheck="false" tabIndex="-1" className="tagify__tag tagify--noAnim" value="Premium"><x title="" className="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x><div><span className="tagify__tag-text">Premium</span></div></tag><span contentEditable="" tabIndex="0" data-placeholder="​" aria-placeholder="" className="tagify__input" role="textbox" aria-autoComplete="both" aria-multiline="false"></span>

                                                </tags><input id="ecommerce-product-tags" className="form-control" name="ecommerce-product-tags" value="Normal,Standard,Premium" aria-label="Product Tags" tabIndex="-1" />
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* <!-- /Organize Card --> */}
                                </div>
                                {/* <!-- /Second column --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- / Content --> */}




                    {/* <!-- Footer --> */}
                    <footer className="content-footer footer bg-footer-theme">
                        <div className="container-xxl">
                            <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                                <div className="text-body">
                                    © <script>
                                        document.write(new Date().getFullYear())

                                    </script>2024, made with ❤️ by <a href="https://themeselection.com" target="_blank" className="footer-link">ThemeSelection</a>
                                </div>
                                <div className="d-none d-lg-inline-block">

                                    <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
                                    <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">More Themes</a>

                                    <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>


                                    <a href="https://themeselection.com/support/" target="_blank" className="footer-link d-none d-sm-inline-block">Support</a>

                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* <!-- / Footer --> */}


                    <div className="content-backdrop fade"></div>
                </div>
                {/* <!-- Content wrapper --> */}
            </div>
            {popup&&message==="Add Successfully!!!"  &&
                <AddConFirm
                    message={message}
                    onClose={handleClosePopup}
                />
            }
        </>
    )
}
export default Ecommerce_Products_Add