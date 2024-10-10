import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";



const Order = () => {
    console.log("welcome");
    const baseURL = "http://127.0.0.1:3000/api/orders/newOrder"
    const { items } = useSelector((state) => state.cart);
    const location = useLocation();
    const totalPrice = location.state?.totalPrice || 0;
    const [listProduct, setListProduct] = useState([]);
    const [listPay, setListPay] = useState(["ATM", "Momo"]);
    const [flag, setFlag] = useState(false);
    const [data, setData] = useState({
    })
    console.log("Test data", data);
    console.log("list is:", listProduct)


    useEffect(() => (
        setListProduct(items.cart.items)
    ), [items.cart.items])



    // const data = {
    //     shippingInfo:
    //     {
    //         address: "Los Angeles Towel Diddy house",
    //         city: "Penhouse",
    //         state:
    //             "Kansas"
    //         ,
    //         country: "USA",
    //         pinCode:
    //             "888888"

    //         , phone:
    //             "09099581051"
    //     }
    //     ,
    //    ,
    //     orderItems: [{
    //         product: "66c80211701807089e09457b",
    //         quantity: "1"
    //     }]
    //     ,
    //     user: "8",
    //     itemPrice: "4000",
    //     taxPrice: "100",
    //     shippingPrice: "10",
    //     totalPrice: "455455"
    // }
    const token = localStorage.getItem("token");
    const fetchData = async () => {
        try {
            const response = await axios.post(baseURL, data, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                    "Content-Type": "application/json"
                }
            });
            console.log("Here your result", response.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    const handleAddress = (name, result) => {
        console.log("your address", result);

        setData(prev => ({
            ...prev,
            [name]: result

        }));
    }
    const handlePayByMomo = async (data) => {
        console.log("send",data);
        
        const url = "http://localhost:3000/api/payment";
        const response = await axios.post(url, data);
        if (response.data) {
            const payUrl = response.data.payUrl;
            const orderId = response.data.orderId;
            const updateFullData = {
                ...data,
                paymentInfo:{
                    id:orderId,
                    status:"pending"
                }
            }
            window.location.href=`${payUrl}`
        }
        
        
    }
    const handlePurchase = () => {
        const method = document.getElementById("payment-method");
        const payment = method.value;
        const updateData = {
            ...data,
            orderItems: listProduct,
            total: Math.round(totalPrice + 0.1 * totalPrice + 20),
        }
        switch (payment) {
            case "ATM":
                console.log("ok");
                break;
            case "Momo":
                handlePayByMomo(updateData);
                break;
            default:
                break;
        }

    }
    return (
        <>
            <section className="d-flex justify-content-center flex-md-column  align-items-center">
                <h1>Check out</h1>
                <form>
                    <table border={1}>
                        <tr>
                            <td>
                                <label htmlFor="address">Address</label>
                                <input type="text" placeholder="Enter your address" id="address" name="address" required onChange={(event) => handleAddress(event.currentTarget.name, event.currentTarget.value)} />

                            </td>

                            <td colSpan={2}>
                                <label htmlFor="state">State</label>
                                <input type="text" placeholder="Enter your state" name="state" id="state" required onChange={(event) => handleAddress(event.currentTarget.name, event.currentTarget.value)} />

                                <label htmlFor="address">City</label>
                                <input type="text" placeholder="Enter your city..." name="city" id="city" required onChange={(event) => handleAddress(event.currentTarget.name, event.currentTarget.value)} />

                                <label htmlFor="country">Country</label>
                                <input type="text" placeholder="Enter your country" name="country" id="country" required onChange={(event) => handleAddress(event.currentTarget.name, event.currentTarget.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <label htmlFor="pincode">Pincode</label>
                                <input type="number" placeholder="Enter your pincode" name="pincode" id="pincode" required onChange={(event) => handleAddress(event.currentTarget.name, event.currentTarget.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="number" placeholder="Enter your phone" name="phone" required id="phone" onChange={(event) => handleAddress(event.currentTarget.name, event.currentTarget.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                Payment method
                                <br />
                                <select id="payment-method">
                                    <option value={listPay[0]} name="atm" active>ATM</option>
                                    <option value={listPay[1]} name="momo">Momo</option>
                                </select></td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <fieldset>
                                    <legend>
                                        Products
                                    </legend>
                                    {listProduct.length !== 0 && (
                                        listProduct.map((item, index) => (
                                            <div key={item._id} style={{ border: "1px solid black" }}>
                                                <ul className="d-flex align-center justify-content-between " style={{ listStyle: "none", padding: "10px" }}>
                                                    <li>{item.productId.name}</li>
                                                    <li>{item.productId.price}$</li>
                                                    <li>{item.productId.description}</li>
                                                    <li>x{item.quantity}</li>
                                                    <li>{item.productId.rating}</li>
                                                </ul>
                                            </div>
                                        )
                                        ))}


                                </fieldset>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} className="text-right">
                                <p >Tax price: 10% </p>
                                <p>Ship price: 20$ </p>
                                <p>Total price: {totalPrice}$</p>
                            </td>
                        </tr>
                    </table>

                    <button type="submit" style={{ border: "1px solid black", backgroundColor: "grey", color: "white", opacity: "0.5", borderRadius: "5px" }}>Cancel</button>
                </form>
                <button onClick={handlePurchase} style={{ border: "1px solid black", backgroundColor: "grey", color: "white", opacity: "0.5", borderRadius: "5px" }}>Purchase</button>

            </section>
        </>
    )
}
export default Order;