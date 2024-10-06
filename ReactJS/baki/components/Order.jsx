import React, { useState } from "react";
import axios from "axios";



const Order = () => {
    console.log("welcome");
    const baseURL = "http://127.0.0.1:3000/api/orders/newOrder"
    const [data, setData] = useState({
    })
    console.log("Test data", data);
    

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
    //     paymentInfo: {
    //         id: "pi_1GqIC8l6Wq90MUaG9zt7M2e5",
    //         status: "pending",
    //     },
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
    const handleAddress = (event) => {
        const result = event.currentTarget.value;
        const name = event.currentTarget.name;
        console.log(name);
        
        setData(prev=>({...prev,
            [name]:result

        }));
    }
    const handlePurchase=()=>{
        console.log("here your test data",data);
    }
    return (
        <>
            <section className="d-flex justify-content-center flex-md-column  align-items-center">
                <h1>Check out</h1>
                <form action={handlePurchase}>
                    <table border={1}>
                        <tr>
                            <td>
                                <label htmlFor="address">Address</label>
                                <input type="text" placeholder="Enter your address" id="address" name="address" onChange={(event) => handleAddress(event)} />
                                <label htmlFor="address">City</label>
                                <input type="text" placeholder="Enter your city..." id="city" />
                            </td>
                            <td>
                                <label htmlFor="address">State</label>
                                <input type="text" placeholder="Enter your state" id="state" />
                            </td>
                            <td>
                                <label htmlFor="address">Country</label>
                                <input type="text" placeholder="Enter your country" id="country" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="address">Pincode</label>
                                <input type="text" placeholder="Enter your address" id="Pincode" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="address">Phone Number</label>
                                <input type="text" placeholder="Enter your address" id="Phone" /></td></tr>
                        <tr><td>
                            <select>
                                <option active>by card</option>
                                <option>by online</option>
                            </select></td></tr>
                        <tr>
                            <td>
                                <label htmlFor="address">Payment Info</label>
                                <input type="text" placeholder="Enter your address" id="Phone" /></td>
                            <td>ok</td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="address">Products</label>
                                <input type="text" placeholder="Enter your address" id="Phone" />
                            </td>
                            <td>
                                <p>Item price</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Tax price</p>
                            </td>
                            <td>
                                <p>Ship price</p>
                            </td>
                            <td>
                                <p>Total price</p>
                            </td>
                        </tr>
                    </table>
                    <button onClick={handlePurchase}>Purchase</button>
                    <button type="submit">Submit</button>
                </form>

            </section>
        </>
    )
}
export default Order;