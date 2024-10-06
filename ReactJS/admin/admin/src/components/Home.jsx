import React from "react";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigation = useNavigate();

  function handleLogOut() {
    navigation("/admin");
    localStorage.clear();
  }

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Menu />
          <div className="layout-page">
            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar">
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
                  <i className="bx bx-menu bx-md"></i>
                </a>
              </div>

              <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

                <div className="navbar-nav align-items-center">
                  <div className="nav-item d-flex align-items-center">
                    <i className="bx bx-search bx-md"></i>
                    <input
                      type="text"
                      className="form-control border-0 shadow-none ps-1 ps-sm-2"
                      placeholder="Search..."
                      aria-label="Search..." />
                  </div>
                </div>


                <ul className="navbar-nav flex-row align-items-center ms-auto">

                  <li className="nav-item lh-1 me-4">
                    <a
                      className="github-button"
                      href="https://github.com/themeselection/sneat-html-admin-template-free"
                      data-icon="octicon-star"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                    >Bao</a                                        >
                  </li>


                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow p-0"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown">
                      <div className="avatar avatar-online">
                        <img src="../assets/img/avatars/1.png" className="w-px-40 h-auto rounded-circle" />
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar avatar-online">
                                <img src="../assets/img/avatars/1.png" className="w-px-40 h-auto rounded-circle" />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="mb-0">Bao</h6>
                              <small className="text-muted">Admin</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider my-1"></div>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bx bx-user bx-md me-3"></i><span>My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"> <i className="bx bx-cog bx-md me-3"></i><span>Settings</span> </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="d-flex align-items-center align-middle">
                            <i className="flex-shrink-0 bx bx-credit-card bx-md me-3"></i
                            ><span className="flex-grow-1 align-middle">Billing Plan</span>
                            <span className="flex-shrink-0 badge rounded-pill bg-danger">4</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider my-1"></div>
                      </li>
                      <li onClick={handleLogOut}>
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="bx bx-power-off bx-md me-3"></i><span>Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                </ul>
              </div>
            </nav>




            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="col-xxl-8 mb-6 order-0">
                    <div className="card">
                      <div className="d-flex align-items-start row">
                        <div className="col-sm-7">
                          <div className="card-body">
                            <h5 className="card-title text-primary mb-3">Congratulations DomDom! 🎉</h5>
                            <p className="mb-6">
                              You have done 72% more sales today.<br />Check your new badge in your profile.
                            </p>

                            <a href="javascript:;" className="btn btn-sm btn-outline-primary">View Badges</a>
                          </div>
                        </div>
                        <div className="col-sm-5 text-center text-sm-left">
                          <div className="card-body pb-0 px-0 px-md-6">
                            <img
                              src="../assets/img/illustrations/man-with-laptop.png"
                              height="175"
                              className="scaleX-n1-rtl"
                              alt="View Badge User" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 order-1">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-6 mb-6">
                        <div className="card h-100">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between mb-4">
                              <div className="avatar flex-shrink-0">
                                <img
                                  src="../assets/img/icons/unicons/chart-success.png"
                                  alt="chart success"
                                  className="rounded" />
                              </div>
                              <div className="dropdown">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="cardOpt3"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false">
                                  <i className="bx bx-dots-vertical-rounded text-muted"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                </div>
                              </div>
                            </div>
                            <p className="mb-1">Profit</p>
                            <h4 className="card-title mb-3">$12,628</h4>
                            <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-6 mb-6">
                        <div className="card h-100">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between mb-4">
                              <div className="avatar flex-shrink-0">
                                <img
                                  src="../assets/img/icons/unicons/wallet-info.png"
                                  alt="wallet info"
                                  className="rounded" />
                              </div>
                              <div className="dropdown">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="cardOpt6"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false">
                                  <i className="bx bx-dots-vertical-rounded text-muted"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                </div>
                              </div>
                            </div>
                            <p className="mb-1">Sales</p>
                            <h4 className="card-title mb-3">$4,679</h4>
                            <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +28.42%</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-xxl-8 order-2 order-md-3 order-xxl-2 mb-6">
                    <div className="card">
                      <div className="row row-bordered g-0">
                        <div className="col-lg-8">
                          <div className="card-header d-flex align-items-center justify-content-between">
                            <div className="card-title mb-0">
                              <h5 className="m-0 me-2">Total Revenue</h5>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="totalRevenue"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="bx bx-dots-vertical-rounded bx-lg text-muted"></i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="totalRevenue">
                                <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                                <a className="dropdown-item" href="javascript:void(0);">Share</a>
                              </div>
                            </div>
                          </div>
                          <div id="totalRevenueChart" className="px-3"></div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center">
                          <div className="card-body px-xl-9">
                            <div className="text-center mb-6">
                              <div className="btn-group">
                                <button type="button" className="btn btn-outline-primary">
                                  <script>
                                    document.write(new Date().getFullYear() - 1);
                                  </script>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false">
                                  <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="javascript:void(0);">2021</a></li>
                                  <li><a className="dropdown-item" href="javascript:void(0);">2020</a></li>
                                  <li><a className="dropdown-item" href="javascript:void(0);">2019</a></li>
                                </ul>
                              </div>
                            </div>

                            <div id="growthChart"></div>
                            <div className="text-center fw-medium my-6">62% Company Growth</div>

                            <div className="d-flex gap-3 justify-content-between">
                              <div className="d-flex">
                                <div className="avatar me-2">
                                  <span className="avatar-initial rounded-2 bg-label-primary"
                                  ><i className="bx bx-dollar bx-lg text-primary"></i
                                  ></span>
                                </div>
                                <div className="d-flex flex-column">
                                  <small>
                                    <script>
                                      document.write(new Date().getFullYear() - 1);
                                    </script>
                                  </small>
                                  <h6 className="mb-0">$32.5k</h6>
                                </div>
                              </div>
                              <div className="d-flex">
                                <div className="avatar me-2">
                                  <span className="avatar-initial rounded-2 bg-label-info"
                                  ><i className="bx bx-wallet bx-lg text-info"></i
                                  ></span>
                                </div>
                                <div className="d-flex flex-column">
                                  <small>
                                    <script>
                                      document.write(new Date().getFullYear() - 2);
                                    </script>
                                  </small>
                                  <h6 className="mb-0">$41.2k</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-8 col-lg-12 col-xxl-4 order-3 order-md-2">
                    <div className="row">
                      <div className="col-6 mb-6">
                        <div className="card h-100">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between mb-4">
                              <div className="avatar flex-shrink-0">
                                <img src="../assets/img/icons/unicons/paypal.png" alt="paypal" className="rounded" />
                              </div>
                              <div className="dropdown">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="cardOpt4"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false">
                                  <i className="bx bx-dots-vertical-rounded text-muted"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                </div>
                              </div>
                            </div>
                            <p className="mb-1">Payments</p>
                            <h4 className="card-title mb-3">$2,456</h4>
                            <small className="text-danger fw-medium"><i className="bx bx-down-arrow-alt"></i> -14.82%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 mb-6">
                        <div className="card h-100">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between mb-4">
                              <div className="avatar flex-shrink-0">
                                <img src="../assets/img/icons/unicons/cc-primary.png" alt="Credit Card" className="rounded" />
                              </div>
                              <div className="dropdown">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="cardOpt1"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false">
                                  <i className="bx bx-dots-vertical-rounded text-muted"></i>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="cardOpt1">
                                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                </div>
                              </div>
                            </div>
                            <p className="mb-1">Transactions</p>
                            <h4 className="card-title mb-3">$14,857</h4>
                            <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +28.14%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mb-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center flex-sm-row flex-column gap-10">
                              <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                <div className="card-title mb-6">
                                  <h5 className="text-nowrap mb-1">Profile Report</h5>
                                  <span className="badge bg-label-warning">YEAR 2022</span>
                                </div>
                                <div className="mt-sm-auto">
                                  <span className="text-success text-nowrap fw-medium"
                                  ><i className="bx bx-up-arrow-alt"></i> 68.2%</span
                                  >
                                  <h4 className="mb-0">$84,686k</h4>
                                </div>
                              </div>
                              <div id="profileReportChart"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">

                  <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-6">
                    <div className="card h-100">
                      <div className="card-header d-flex justify-content-between">
                        <div className="card-title mb-0">
                          <h5 className="mb-1 me-2">Order Statistics</h5>
                          <p className="card-subtitle">42.82k Total Sales</p>
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn text-muted p-0"
                            type="button"
                            id="orederStatistics"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <i className="bx bx-dots-vertical-rounded bx-lg"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                            <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                            <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                            <a className="dropdown-item" href="javascript:void(0);">Share</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-6">
                          <div className="d-flex flex-column align-items-center gap-1">
                            <h3 className="mb-1">8,258</h3>
                            <small>Total Orders</small>
                          </div>
                          <div id="orderStatisticsChart"></div>
                        </div>
                        <ul className="p-0 m-0">
                          <li className="d-flex align-items-center mb-5">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary"
                              ><i className="bx bx-mobile-alt"></i
                              ></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Electronic</h6>
                                <small>Mobile, Earbuds, TV</small>
                              </div>
                              <div className="user-progress">
                                <h6 className="mb-0">82.5k</h6>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-5">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-success"><i className="bx bx-closet"></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Fashion</h6>
                                <small>T-shirt, Jeans, Shoes</small>
                              </div>
                              <div className="user-progress">
                                <h6 className="mb-0">23.8k</h6>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-5">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt"></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Decor</h6>
                                <small>Fine Art, Dining</small>
                              </div>
                              <div className="user-progress">
                                <h6 className="mb-0">849k</h6>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-secondary"
                              ><i className="bx bx-football"></i
                              ></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Sports</h6>
                                <small>Football, Cricket Kit</small>
                              </div>
                              <div className="user-progress">
                                <h6 className="mb-0">99</h6>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>



                  <div className="col-md-6 col-lg-4 order-1 mb-6">
                    <div className="card h-100">
                      <div className="card-header nav-align-top">
                        <ul className="nav nav-pills" role="tablist">
                          <li className="nav-item">
                            <button
                              type="button"
                              className="nav-link active"
                              role="tab"
                              data-bs-toggle="tab"
                              data-bs-target="#navs-tabs-line-card-income"
                              aria-controls="navs-tabs-line-card-income"
                              aria-selected="true">
                              Income
                            </button>
                          </li>
                          <li className="nav-item">
                            <button type="button" className="nav-link" role="tab">Expenses</button>
                          </li>
                          <li className="nav-item">
                            <button type="button" className="nav-link" role="tab">Profit</button>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div className="tab-content p-0">
                          <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                            <div className="d-flex mb-6">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src="../assets/img/icons/unicons/wallet.png" alt="User" />
                              </div>
                              <div>
                                <p className="mb-0">Total Balance</p>
                                <div className="d-flex align-items-center">
                                  <h6 className="mb-0 me-1">$459.10</h6>
                                  <small className="text-success fw-medium">
                                    <i className="bx bx-chevron-up bx-lg"></i>
                                    42.9%
                                  </small>
                                </div>
                              </div>
                            </div>
                            <div id="incomeChart"></div>
                            <div className="d-flex align-items-center justify-content-center mt-6 gap-3">
                              <div className="flex-shrink-0">
                                <div id="expensesOfWeek"></div>
                              </div>
                              <div>
                                <h6 className="mb-0">Income this week</h6>
                                <small>$39k less than last week</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 order-2 mb-6">
                    <div className="card h-100">
                      <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="card-title m-0 me-2">Transactions</h5>
                        <div className="dropdown">
                          <button
                            className="btn text-muted p-0"
                            type="button"
                            id="transactionID"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <i className="bx bx-dots-vertical-rounded bx-lg"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
                            <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                            <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                            <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-4">
                        <ul className="p-0 m-0">
                          <li className="d-flex align-items-center mb-6">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/paypal.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="d-block">Paypal</small>
                                <h6 className="fw-normal mb-0">Send money</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-2">
                                <h6 className="fw-normal mb-0">+82.6</h6>
                                <span className="text-muted">USD</span>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-6">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="d-block">Wallet</small>
                                <h6 className="fw-normal mb-0">Mac'D</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-2">
                                <h6 className="fw-normal mb-0">+270.69</h6>
                                <span className="text-muted">USD</span>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-6">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/chart.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="d-block">Transfer</small>
                                <h6 className="fw-normal mb-0">Refund</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-2">
                                <h6 className="fw-normal mb-0">+637.91</h6>
                                <span className="text-muted">USD</span>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-6">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/cc-primary.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="d-block">Credit Card</small>
                                <h6 className="fw-normal mb-0">Ordered Food</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-2">
                                <h6 className="fw-normal mb-0">-838.71</h6>
                                <span className="text-muted">USD</span>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-6">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="d-block">Wallet</small>
                                <h6 className="fw-normal mb-0">Starbucks</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-2">
                                <h6 className="fw-normal mb-0">+203.33</h6>
                                <span className="text-muted">USD</span>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/cc-warning.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="d-block">Mastercard</small>
                                <h6 className="fw-normal mb-0">Ordered Food</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-2">
                                <h6 className="fw-normal mb-0">-92.45</h6>
                                <span className="text-muted">USD</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl">
                  <div
                    className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                    <div className="text-body">
                      ©
                      <script>
                        document.write(new Date().getFullYear());
                      </script>
                      , made with ❤️ by
                      <a href="https://themeselection.com" target="_blank" className="footer-link">ThemeSelection</a>
                    </div>
                    <div className="d-none d-lg-inline-block">
                      <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
                      <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">More Themes</a>

                      <a
                        href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/"
                        target="_blank"
                        className="footer-link me-4"
                      >Documentation</a
                      >

                      <a
                        href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                        target="_blank"
                        className="footer-link"
                      >Support</a
                      >
                    </div>
                  </div>
                </div>
              </footer>


              <div className="content-backdrop fade"></div>
            </div>

          </div>

        </div>


        <div className="layout-overlay layout-menu-toggle"></div>
      </div>

      <div className="buy-now">
        <a
          href="https://themeselection.com/item/sneat-dashboard-pro-bootstrap/"
          target="_blank"
          className="btn btn-danger btn-buy-now"
        >Upgrade to Pro</a                >
      </div>

    </>
  )
}
export default Home;