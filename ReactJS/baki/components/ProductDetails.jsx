import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { useCart } from "../src/reducer/cartReducer";
import { useDispatch } from "react-redux";
import { addCart } from "../src/features/CartSlice";


const ProductDetails = () => {

    const location = useLocation();
    const id = location.state.id || {};
    console.log("check id response", id);
    const [productInfo, setProductInfo] = useState([]);
    const token = localStorage.getItem('token');
    const [count, setCount] = useState(1);
    console.log(token);
    const dis = useDispatch();
    const user = localStorage.getItem("userId");
    const [listProduct, setListProduct] = useState([]);
    const colorOptions = [
        { name: "red", value: "#fd1d1d" },
        { name: "white", value: "#ffffff" },
        { name: "black", value: "#000000" },
        { name: "yellow", value: "#ffff00" },
        { name: "blue", value: "#0000ff" },
        { name: "tan", value: "#D2B48C" }
    ]
    const [color, setColor] = useState(colorOptions[0].name);
    const sizeOptions = [
        { name: "M", value: "M" },
        { name: "XL", value: "XL" },
        { name: "L", value: "L" },
        { name: "XXL", value: "XXL" },
    ]
    const [size, setSize] = useState(sizeOptions[0].name);
    console.log(size);
    function handleAdd() {
        setCount((prev) => prev + 1);
    }
    function handleDecrease() {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
        else
            console.log("You cannot decrease with smaller than 1 !!!");
    }
   async function addCartItem(item) {
            console.log("check quan",count);
            const updateProduct = [...listProduct, { item, quantity: count }];
            dis(addCart({ userId: user, quantity: updateProduct }))
    }
    
    const handleChangeColor = (event) => {
        setColor(event.target.value);
    }
    const handleChangeSize = (event) => {
        setSize(event.target.value);
    }
    useEffect(() => {
        if (token) {
            async function fetchData() {
                try {
                    const response = await axios.get(`http://127.0.0.1:3000/api/products/${id}`,
                        {
                            headers: {
                                Authorization: `Bearer ${JSON.parse(token)}`
                            }
                        }
                    )

                    if (response.data) {
                        console.log(response.data.product);
                        setProductInfo(response.data.product);
                    }
                }
                catch (err) {
                    console.log(err.message);
                }
            }
            fetchData();
        } else {
            console.log("Token is timeout!!!");

        }

    }, [])


    console.log(id)

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <section className="detail-product">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 left-col">
                                {productInfo.length !== 0 ? (
                                    <div className="row"  >
                                        <div className="swiper-container vertical col-md-3">
                                            <div className="swiper-wrapper" >
                                                <div className="swiper-slide">
                                                    <div className="model">
                                                        <img src={productInfo.images.url} loading="lazy" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="model">
                                                        <img src={productInfo.images.url} loading="lazy" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="model">
                                                        <img src={productInfo.images.url} loading="lazy" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="model">
                                                        <img src={productInfo.images.url} loading="lazy" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-container vertical col-md-9">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="model">
                                                        <img src={productInfo.images.url} loading="lazy" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <p>no data</p>
                                    </div>
                                )}

                            </div>
                            <div className="col-md-4 right-col">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="swiper-container vertical">
                                            <div className="swiper-wrapper d-flex flex-column column-gap-20">
                                                <div className="swiper-slide">
                                                    <h1 className="text-sm-center">{productInfo.name}</h1>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div class="pricing-price-wrap">
                                                        <div class="product-compare-price">$&nbsp;{productInfo.price}&nbsp;USD</div>
                                                        <div class="product-price">$&nbsp;{Math.round(productInfo.price - ((productInfo.discount / 100) * productInfo.price), 2)}&nbsp;USD</div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="event-notification border border-primary border-3 p-3">
                                                        <p className="text-center">Free coupon for you if you buy this shirt in 2025. All Shirt will become mighty if you wear it</p>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="describe mr-auto" style={{ width: "500px" }}>
                                                        <div className="describe-head d-flex align-items-center justify-content-between">
                                                            <p>Describe</p>
                                                            <i class="fa-solid fa-chevron-down"></i>
                                                        </div>

                                                    </div>
                                                    <div className="decribe-content"></div>
                                                    <div className="describe-element">
                                                        <div className="decribe-color d-flex align-content-center ">
                                                            <h4 className="mr-4" style={{ margin: 0, padding: 0, fontSize: "18px" }}>Color</h4>
                                                            <div className="color d-flex align-items-center justify-content-between" style={{ width: "170px" }}>
                                                                {colorOptions.map((colorPick) => (
                                                                    <label style={{ cursor: "pointer" }} className="label" key={colorPick.name} onClick={() => handleChangeColor({ target: { value: colorPick.name } })}>
                                                                        <input className="pro-input desktop-input-color" type="radio" name="pa_mau" value={colorPick.name} checked={color == colorPick.name} hidden />
                                                                        <div className="pro-color cl-w" style={{ background: colorPick.value, width: "20px", height: "20px", border: color == colorPick.name ? "1px solid black" : "1px solid transparent" }}></div>
                                                                    </label>
                                                                ))}
                                                            </div>

                                                        </div>
                                                        <div className="describe-size d-flex align-content-center mt-10 ">
                                                            <h4 className="mr-4" style={{ margin: 0, padding: 0, fontSize: "18px" }}>Size</h4>
                                                            <div className="size d-flex align-items-center justify-content-between" style={{ width: "120px" }}>
                                                                {sizeOptions.map((sizePick) => (
                                                                    <label style={{ cursor: "pointer" }} className="label" key={sizePick.name} onClick={() => (handleChangeSize({ target: { value: sizePick.name } }))}>
                                                                        <input className="pro-input desktop-input-color" type="radio" name={sizePick.name} value={sizePick.name} checked={size == sizePick.name} hidden />
                                                                        <div className="pro-color cl-w" style={{ border: size == sizePick ? "1px solid black" : "1px solid transparent" }}>{sizePick.value}</div>
                                                                    </label>
                                                                ))}

                                                            </div>

                                                        </div>
                                                        <div className="quantity d-flex  ">
                                                            <h4 style={{ fontSize: "16px" }}>Quantity</h4>
                                                            <div className="d-flex align-items-center justify-content-around gap-10" style={{ width: "100px" }}>
                                                                <button onClick={() => handleDecrease()}><p style={{ fontWeight: "bold" }}>-</p></button>
                                                                <p>{count}</p>
                                                                <button onClick={() => handleAdd(productInfo)}><p style={{ fontWeight: "bold" }}>+</p></button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide d-flex align-items-center justify-content-between mb-10">
                                                    <p>Choose your size</p>
                                                    <p>Guide to sizes</p>
                                                </div>
                                                <div className="swiper-slide d-flex justify-content-center align-items-center"
                                                >
                                                    <button onClick={() => addCartItem(productInfo)} className=" text-center mt-10 border border-black " style={{ width: "600px" }}>Add To Card</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>


            </main>

        </>)


}

export default ProductDetails;