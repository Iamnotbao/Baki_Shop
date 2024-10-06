import axios from "axios";
import React, { useEffect, useState } from "react";

const DetailProduct = ({ id, token, onClose }) => {
    const [infoProduct, setInfoProduct] = useState([])
    console.log("thua", infoProduct);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/api/products/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(token)}`
                        }
                    }
                )
                if (response.data) {
                    console.log(response.data.product);
                    setInfoProduct(response.data.product);
                }
                else {
                    console.log("no data");

                }
            }
            catch (err) {
                console.log(err);
            }

        }
        fetchData();
    }, [])

    return (
        <>
            <div className="detail" style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                background: "black",
                opacity: "0.7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"


            }}>
                <div className="detail-content" style={{ background: "white", width: "560px" }}>
                    <table className="table" style={{ maxWidth: "100%", height: "420px" }}>
                        <caption>
                            Detail of Product
                        </caption>
                        <tbody>
                            {infoProduct.length !== 0 ? (
                                <React.Fragment key={infoProduct.id}>
                                    <tr data-dt-row="8" data-dt-column="2">
                                        <td>Product:</td>
                                        <td>{infoProduct.name}</td>
                                    </tr>
                                    <tr data-dt-row="8" data-dt-column="3">
                                        <td>Price:</td>
                                        <td>{infoProduct.price}</td>
                                    </tr>
                                    <tr data-dt-row="8" data-dt-column="4">
                                        <td>Description:</td>
                                        <td>{infoProduct.description}</td>
                                    </tr>
                                    <tr data-dt-row="8" data-dt-column="5">
                                        <td>Category:</td>
                                        <td>{infoProduct.category}</td>
                                    </tr>
                                    <tr data-dt-row="8" data-dt-column="6">
                                        <td>Stock:</td>
                                        <td>{infoProduct.stock}</td>
                                    </tr>
                                </React.Fragment>

                            ) : (
                                <tr>
                                    <td colSpan="2">No data</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="detail-layer"
                onClick={onClose} style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.3)",
                    zIndex: -1
                }}></div>
            </div>

        </>
    )
}

export default DetailProduct;

