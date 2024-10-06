import { EventNoteRounded } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react"
import shirt from "../public/images/polo5.jpg"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { fetchCart, addCart } from "../src/features/CartSlice";



const ProductSlides = () => {

    const [currProduct, setCurrProduct] = useState([]);
    const token = localStorage.getItem("token");
    const [id, setID] = useState("");
    const navigation = useNavigate();
    const dis = useDispatch();
    const [listProduct, setListProduct] = useState([]);
    const [totalProduct, setTotalProduct]= useState(0);
    const [quantity, setQuantity] = useState(1);
    const { items, loading, err } = useSelector((state) => state.cart);
    const [page, setPage] = useState(1);
    console.log(listProduct);
    console.log("check quantity", quantity);
    const user = localStorage.getItem("userId");
    console.log("total Product:",totalProduct);

    const handleSkipPage = (event) => {
        console.log("total",totalProduct);
        event.preventDefault();
        if(page < totalProduct){
            setPage((prev) => prev + 1);
        }
        else{
            setPage(1);
        }
        
    }
    const handlePreviousPage=(event)=>{
        event.preventDefault();
        if(page > 1){
            setPage((prev)=>prev-1);
        }
        else{
            setPage(totalProduct);
        }
       
    }
    function handleAddCart(item) {
        setListProduct((prev) => {
            const existP = prev.find((product) => product.item._id.toString() === item._id.toString());
            if (!existP) {
                return ([{ item, quantity: quantity }]);
            } else {
                return prev.map((product) =>
                    product.item._id.toString() === item._id.toString()
                        ? { ...product, quantity: 1 }
                        : product
                );
            }
        });
    }
    useEffect(() => {
        if (listProduct.length !== 0) {
            const addCartEx = () => {
                dis(addCart({ userId: user, quantity: listProduct }))
            }
            addCartEx();
        }
    }, [listProduct]);


    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
        console.log("clear");
    }


    function handleDetail({ item }) {
        setID(item._id);
        navigation(`/product/${item.name}`, { state: { id: item._id } });
    }
    useEffect(() => {
        if (token) {
            const fetchData = async () => {
                const response = await axios.get(`http://127.0.0.1:3000/api/products?page=${page}`,
                    {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(token)}`
                        }
                    }
                )
                console.log(response);

                if (response.data.products) {
                    setCurrProduct(response.data.products);
                    setTotalProduct(response.data.totalPage);
                   
                    dis(fetchCart(user));
                }
            }
            fetchData();
        }
        else {
            console.log("The token has been expired!!!");
        }
      
    }, [page])
    return (
        <>
            <section className="showSlides position-relative">
                <div class="w-layout-blockcontainer container w-container">
                    <div class="section-title text-center">
                        <h2 data-w-id="d79051fd-55ed-5624-7377-a43e4e16cb91">Hottest picks</h2>
                    </div>
                    <div data-w-id="877f46b8-5d10-d69f-524e-e2bb15a802b3" class="w-dyn-list">
                        <div role="list" class="grid-product w-dyn-items">
                            {currProduct.length !== 0 ? (
                                currProduct.map((item) => (
                                    <div key={item._id} role="listitem" class="w-dyn-item products">
                                        <a data-w-id="1bd98479-74fa-706c-b543-6f0cb23bba98" onClick={() => handleDetail({ item: item })} class="product-item w-inline-block">
                                            <div class="product-image-wrap"><img alt="" loading="eager" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src={item.images.url} class="product-image" />
                                                <div class="product-badge w-dyn-bind-empty"></div><img loading="eager" src={shirt} alt="" class="product-image-hover" />
                                                <div class="product-button-hover">
                                                    <div class="button-small product-hover-button">View product</div>
                                                </div>
                                            </div>
                                            <div class="product-info">
                                                <div class="product-info-wrap">
                                                    <h3 class="product-title">{item.name}</h3>
                                                    <p class="product-description">{item.description}</p>
                                                </div>
                                                <div class="pricing-price-wrap">
                                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="product-price">$&nbsp;{Math.round(item.price - ((item.discount / 100) * item.price), 2)}&nbsp;USD</div>
                                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="product-compare-price">$&nbsp;{item.price}&nbsp;USD</div>
                                                </div>
                                            </div>
                                        </a>
                                        <button className="border bg-black text-white" onClick={() => handleAddCart(item)}>Add to card</button>

                                    </div>
                                ))
                            ) : (<div>No data</div>)}
                            <button onClick={clearCart}>Clear</button>

                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between ml-auto mr-auto  position-absolute " style={{ width: "1600px", height: "80px", top: "50%" }}>
                    <button onClick={(event)=>handlePreviousPage(event)} >
                        &lt;
                    </button>
                    <button onClick={(event)=>handleSkipPage(event)}>
                        &gt;
                    </button>
                </div>
            </section>
        </>
    )
}
export default ProductSlides;