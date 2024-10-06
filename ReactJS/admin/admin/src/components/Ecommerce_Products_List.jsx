import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DeletePopUp from "./DeletePopUp";
import DetailProduct from "./DetailProduct";


const Ecommerce_Products_List = () => {
  const [listProduct, setListProduct] = useState([]);
  const [popUp, setPopup] = useState(false);
  const [id, setID] = useState(null);
  const[detailProduct, setDetailProduct]=useState(false);
  const token = localStorage.getItem("token");
  const navigation = useNavigate();
  console.log("key: ", token);

  useEffect(() => {
    async function handleListProducts() {
      try {
        const response = await axios.get("http://localhost:3000/api/products", {
          headers: {
            Authorization: `bearer ${JSON.parse(token)}`
          }
        })
        console.log(response.data);
        if (response.data) {
          setListProduct(response.data.products);
          console.log(listProduct)
        };
      }
      catch (err) {
        console.log(err);
      }
    }
    handleListProducts();
  }, []
  )
  console.log("Chosen ID: ",id);
  const handleGetID = (del_id) => {
    setID(del_id);
  }

  const handleDelete=(del_id)=>{
    handleGetID(del_id);
    setPopup(true);
  }
  const handleDetail=(deltail_id)=>{
    handleGetID(deltail_id);
    setDetailProduct(true);
  }

  const handleCancel = () => {
    console.log("ok");

    setID(null);
    setPopup(false);
  }
 
  const handleCloseDetail=()=>{
    setDetailProduct(false);
  }
  const handleDeleteTrue = async () => {
    console.log("Delete success " + id);
    const response = await axios.delete(`http://localhost:3000/api/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`
        }
      }
    )
    setPopup(false);
    setID(null);
    console.log(response.data);
  }
  function handleAdd() {
    navigation("add");
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card mb-6">
            <div className="card-widget-separator-wrapper">
              <div className="card-body card-widget-separator">
                <div className="row gy-4 gy-sm-1">
                  <div className="col-sm-6 col-lg-3">
                    <div className="d-flex justify-content-between align-items-start card-widget-1 border-end pb-4 pb-sm-0">
                      <div>
                        <p className="mb-1">In-store Sales</p>
                        <h4 className="mb-1">$5,345.43</h4>
                        <p className="mb-0">
                          <span className="me-2">5k orders</span>
                          <span className="badge bg-label-success">+5.7%</span>
                        </p>
                      </div>
                      <span className="avatar me-sm-6">
                        <span className="avatar-initial rounded w-px-44 h-px-44">
                          <i className="bx bx-store-alt bx-lg text-heading"></i>
                        </span>
                      </span>
                    </div>
                    <hr className="d-none d-sm-block d-lg-none me-6" />
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-4 pb-sm-0">
                      <div>
                        <p className="mb-1">Website Sales</p>
                        <h4 className="mb-1">$674,347.12</h4>
                        <p className="mb-0">
                          <span className="me-2">21k orders</span>
                          <span className="badge bg-label-success">+12.4%</span>
                        </p>
                      </div>
                      <span className="avatar p-2 me-lg-6">
                        <span className="avatar-initial rounded w-px-44 h-px-44">
                          <i className="bx bx-laptop bx-lg text-heading"></i>
                        </span>
                      </span>
                    </div>
                    <hr className="d-none d-sm-block d-lg-none" />
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="d-flex justify-content-between align-items-start border-end pb-4 pb-sm-0 card-widget-3">
                      <div>
                        <p className="mb-1">Discount</p>
                        <h4 className="mb-1">$14,235.12</h4>
                        <p className="mb-0">6k orders</p>
                      </div>
                      <span className="avatar p-2 me-sm-6">
                        <span className="avatar-initial rounded w-px-44 h-px-44">
                          <i className="bx bx-gift bx-lg text-heading"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <p className="mb-1">Affiliate</p>
                        <h4 className="mb-1">$8,345.23</h4>
                        <p className="mb-0">
                          <span className="me-2">150 orders</span>
                          <span className="badge bg-label-danger">-3.5%</span>
                        </p>
                      </div>
                      <span className="avatar p-2">
                        <span className="avatar-initial rounded w-px-44 h-px-44">
                          <i className="bx bx-wallet bx-lg text-heading"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Filter</h5>
              <div className="d-flex justify-content-between align-items-center row pt-4 gap-6 gap-md-0 g-md-6">
                <div className="col-md-4 product_status">
                  <select id="ProductStatus" className="form-select text-capitalize">
                    <option value="">Status</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Publish">Publish</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="col-md-4 product_category">
                  <select id="ProductCategory" className="form-select text-capitalize">
                    <option value="">Category</option>
                    <option value="Household">Household</option>
                    <option value="Office">Office</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Game">Game</option>
                  </select>
                </div>
                <div className="col-md-4 product_stock">
                  <select id="ProductStock" className="form-select text-capitalize">
                    <option value="">Stock</option>
                    <option value="Out_of_Stock">Out of Stock</option>
                    <option value="In_Stock">In Stock</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-datatable table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                className="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <div className="card-header d-flex border-top rounded-0 flex-wrap py-0 flex-column flex-md-row align-items-start">
                  <div className="me-5 ms-n4 pe-5 mb-n6 mb-md-0">
                    <div id="DataTables_Table_0_filter" className="dataTables_filter">
                      <label>
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search Product"
                          aria-controls="DataTables_Table_0"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start justify-content-md-end align-items-baseline">
                    <div className="dt-action-buttons d-flex flex-column align-items-start align-items-sm-center justify-content-sm-center pt-0 gap-sm-4 gap-sm-0 flex-sm-row">
                      <div className="dataTables_length mx-n2" id="DataTables_Table_0_length">
                        <label>
                          <select
                            name="DataTables_Table_0_length"
                            aria-controls="DataTables_Table_0"
                            className="form-select"
                          >
                            <option value="7">7</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="70">70</option>
                            <option value="100">100</option>
                          </select>
                        </label>
                      </div>
                      <div className="dt-buttons btn-group flex-wrap d-flex mb-6 mb-sm-0">
                        <div className="btn-group">
                          <button
                            className="btn btn-secondary buttons-collection dropdown-toggle btn-label-secondary me-4"
                            type="button"
                          >
                            <span>
                              <i className="bx bx-export me-2 bx-xs"></i>Export
                            </span>
                          </button>
                        </div>
                        <button
                          className="btn btn-secondary add-new btn-primary"
                          type="button"
                          onClick={handleAdd}
                        >
                          <span>
                            <i className="bx bx-plus me-0 me-sm-1 bx-xs"></i>
                            <span className="d-none d-sm-inline-block">Add Product</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <table
                  className="datatables-products table dataTable no-footer dtr-column collapsed"
                  id="DataTables_Table_0"
                >
                  <thead className="border-top">
                    <tr>
                      <th className="control sorting_disabled" style={{ width: "6px" }}></th>
                      <th
                        className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                        style={{ width: "18px" }}
                        data-col="1"
                      >
                        <input type="checkbox" className="form-check-input" />
                      </th>
                      <th className="sorting sorting_asc" aria-sort="ascending">
                        product
                      </th>
                      <th className="sorting">category</th>
                      <th className="sorting_disabled">stock</th>
                      <th className="sorting">sku</th>
                      <th className="sorting">price</th>
                      <th className="sorting_disabled">created</th>
                      <th className="sorting_disabled">actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listProduct.length !== 0 ? (
                      listProduct.map((item) =>

                      (
                        <tr className="even" id={item._id}>
                          <td class="control" tabindex="0">
                              <button onClick={()=>handleDetail(item._id)}>+</button>
                          </td>
                          <td className=" dt-checkboxes-cell">
                            <input type="checkbox" className="form-check-input" />
                          </td>
                          <td className="sorting_1">
                            <div className="d-flex justify-content-start align-items-start">
                              <img
                                src={item.images.url}
                                alt={item.images.public_id}
                                className="me-2"
                                width="50"
                              />
                              <div className="d-flex justify-content-center flex-column">
                                <span className="text-heading d-block">{item.name}</span>
                                <small className="text-muted">{item.description}</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-label-primary">{item.category}</span>
                          </td>
                          <td>
                            <span className="badge bg-label-success">
                              {(item.stock > 0) ? ("In Stock") : ("Out Of Stock")}</span>
                          </td>
                          <td>{item.stock}</td>
                          <td>{item.price}$</td>
                          <td>{item.createAt}</td>
                          <td>
                            <div className="d-inline-block">
                              <button
                                className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"

                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end m-0">
                                <li>
                                  <a className="dropdown-item">
                                    <i className="bx bx-edit-alt me-2"></i>Edit
                                  </a>
                                </li>
                                <li onClick={() => handleDelete(item._id)}>
                                  <a className="dropdown-item">
                                    <i className="bx bx-trash me-2"></i>Delete
                                  </a>
                                </li>
                              </ul>

                            </div>
                          </td>
                        </tr>
                      )


                      )

                    ) : (
                      <div><p>No data</p></div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {popUp && (
        <DeletePopUp handleDeleteTrue={handleDeleteTrue} handleDeleteCancel={handleCancel} />
      )}
      {detailProduct &&(
         <DetailProduct
          id={id}
          token={token}
          onClose={handleCloseDetail}
         />
      )
      }

    </>
  );
};

export default Ecommerce_Products_List;
