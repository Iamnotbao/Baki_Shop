import React, { useEffect, useState } from "react";
import { useCart } from "../src/reducer/cartReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../src/features/CartSlice";
const Cart = () => {
    const [carts, setCarts] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const navigation = useNavigate();
    const dispatch = useDispatch();
    console.log("Your carts are:", carts);
    console.log("The money have to pay is:", totalMoney);
    const { items, loading, err } = useSelector((state) => state.cart);


    const userId = localStorage.getItem("userId");

    console.log("This is your cart:", carts);


    function handleDetail({ item }) {
        console.log("ID is", item._id);
        
        navigation(`/product/${item.name}`, { state: { id: item._id } });
    }
    function handleOrder() {
        navigation("/order", { state: { totalPrice: totalMoney } });
    }

    function handleDeleteCart (id,e){
        e.stopPropagation();
        dispatch(deleteCart({userId:userId ,item:id}));
    }

    function handleCancel() {
        console.log("User has to clear things");
        navigation("/home");

        dispatch({ type: "CLEAR_CART" });
    }
    function totalAllItems() {
        if (carts != null) {
            let payment = 0;
            {
                carts.forEach(cart => {
                    payment += Math.round((cart.productId.price * cart.quantity) - (cart.quantity * cart.productId.price * cart.productId.discount / 100), 2);
                });
            }
            setTotalMoney(payment);
        }
    }
    useEffect(() => {
        totalAllItems()
    }, [carts])
    useEffect(() => {
        if (items.cart) {
            setCarts(items.cart.items);
            setLoading(true);
        }
    }, [items.cart])



    // useEffect(() => {
    //     const Process = () => {
    //         const newCart = state.items.map(item => {
    //             const cart =
    //                 Object.entries(item)
    //                     .filter(([key]) => key !== "quantity")
    //                     .map(([key, value]) => value)
    //                     .join('');

    //             return cart;
    //         })
    //         setCombinedValue(prev => [...prev, ...newCart]);
    //     }
    //     Process();

    // }, [state.items])
  
    return (

        <>
            <main className="cart-main">
                <section className="container-fluid" style={{ marginTop: "50px" }}>
                    <h1 className="text-center">Order</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <table border={2} cellPadding={20} className="cart-table ml-auto mr-auto" >
                                <tbody>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Discount</th>
                                        <th>Total</th>
                                    </tr>
                                    {carts.map((item) => (
                                        <tr key={item._id} onClick={()=>handleDetail({item:item.productId})}>
                                            <td>{item.productId.name}</td>  
                                            <td>{item.productId.price}$</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.productId.discount}%</td>
                                            <td>{Math.round((item.productId.price*item.quantity) - (item.productId.price * item.quantity * item.productId.discount / 100), 2)}$</td>
                                            <td><button onClick={(e)=> handleDeleteCart(item.productId._id,e)}>X</button></td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan={5}>
                                            {carts.length !== 0 ? (<p className="text-right"><span style={{ color: "red" }}>Total Cost: </span>{totalMoney}$</p>) : (
                                                <p>Total Cost:0$</p>
                                            )}</td></tr>
                                </tbody>
                            </table>
                            <div className="purchaseButton">
                                <button className="cancel-purchase-button" onClick={handleCancel}>Cancel</button>
                                <button className="purchase-button" onClick={handleOrder}>Purchase</button>
                            </div>
                        </div>

                    </div>
                </section >
            </main >






        </>
    )
}
export default Cart;