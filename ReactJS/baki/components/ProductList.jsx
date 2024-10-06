import { useEffect, useState } from "react";
import axios from "axios"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../src/features/CartSlice";

const ProductList = () => {
    const [page, setPage] = useState(1);
    const [product, setCurrProduct] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [search, setSearch] = useState(false);
    const token = localStorage.getItem("token");
    const location = useLocation();
    const list = location.state?.list;
    const dispatch = useDispatch();
    const navigation = useNavigate();

    console.log("the list has been update", listProduct)
    const userId = localStorage.getItem("userID");

    



    const handleAddCart = (item, e) => {
        e.preventDefault();
        e.stopPropagation();
        setListProduct((prev) => {
            const exist = prev.find((p) => p.item._id.toString() === item._id.toString());
            if (!exist) {
                console.log("done");
                return ([{ item, quantity: quantity }])
            }
            else {
                return prev.map((productExist) =>
                    productExist.item._id.toString() === item._id.toString() ? { ...productExist, quantity: 1 } : productExist
                )
            }

        })
    }

    useEffect(()=>{
        if(listProduct.length !== 0){
            dispatch(addCart({}))
        }
    },[listProduct])
    function Total({ price, discount }) {
        let total = Math.round((price) - (price * (discount / 100)), 4);
        return (
            <p style={{ margin: 0, padding: 0 }}>{total} $</p>
        )
    }
    function handleDetail({ item }) {
        navigation(`/product/${item.name}`, { state: { id: item._id } });
    }
    function handlePage(event) {
        const value = event.currentTarget.getAttribute('data-value');
        event.preventDefault();
        setPage(value);
    }
    useEffect(() => {
        if (list) {
            setSearch(true);
            setCurrProduct(list);
        }
        else {
            fetchData();

        }
    }, [list, page]);
    function ProductsDetail({ item }) {
        return (
            <div className="product-card" onClick={() => handleDetail({ item: item })} style={{ cursor: "pointer" }}>
                <img alt={item.images.public_id} src={item.images.url} loading="lazy"></img>
                <a>{item.name}</a>
                <p style={{ textDecoration: "line-through", margin: 0, padding: 0 }}>{item.price} $</p>
                <div className="d-flex justify-content-between align-items-center w-50" >
                    <p style={{ margin: 0, padding: 0 }}>{item.discount} %</p>
                    <Total price={item.price} discount={item.discount} />
                </div>
                <button className="border bg-black text-white" onClick={(e) => handleAddCart(item, e)}>Add to card</button>

            </div>)

    }

    const fetchData = async () => {
        if (token) {
            const response = await axios.get(`http://127.0.0.1:3000/api/products?page=${page}&limit=10`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`
                    }
                }
            )
            console.log(response);
            if (response.data.products) {
                setCurrProduct(response.data.products);

            }
        }
        else {
            console.log("The token has been expired!!!");
        }
    }
    return (<>
        <section className="product-list" style={{ marginTop: "50px", marginBottom: "100px" }}>
            <h1 className="text-center">All Product Of Baki</h1>
            <div className="container-fluid">
                <div className="row">
                    {product.map((item, colIndex) => (
                        <div key={colIndex} className="col-md-3">
                            <ProductsDetail item={item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="page-number-group" style={{ marginTop: "20px", width: "100px", marginLeft: "auto", marginRight: "auto" }}>
                <ul className="page-number d-inline-flex" style={{ gap: "20px", listStyleType: "none", margin: 0, padding: 0, cursor: "pointer", fontWeight: "bold" }}>
                    <li data-value={1} onClick={(event) => handlePage(event)}><span>1</span></li>
                    <li data-value={2} onClick={(event) => handlePage(event)}><span>2</span></li>
                    <li value={3} onClick={(event) => handlePage(event)}><span>3</span></li>
                    <li value={4} onClick={(event) => handlePage(event)}><span>4</span></li>
                    <li value={">"}><span>&gt;</span></li>
                </ul>
            </div>

        </section>

    </>)

}
export default ProductList;