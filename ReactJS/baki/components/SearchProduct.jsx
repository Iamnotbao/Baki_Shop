import axios from "axios";
import { Search } from "../icon/icon.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const SearchProducts = () => {
    const [search, setSearch] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [listProducts, setListProduct] = useState([]);
    const navigation = useNavigate();
    console.log("keyword", keyword);
    console.log("data is", listProducts);

    


    const handleSearch = () => {
        setSearch(true);

    }
    const handleChangeKeyword = (event) => {
        const value = event.target.value;
        setKeyword(value);
    }
    const fetchProduct = async () => {
        try {
            const token = localStorage.getItem("token");
            console.log("access token", token);

            const response = await axios.get(`http://127.0.0.1:3000/api/products/search?keyword=${keyword}`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                }
            })
            console.log("Here your data:", response.data);
            if (response.data) {
                navigation("/productList", { state: { list: response.data.products } });
            }
        } catch (err) {
            console.log(err);

        }
    }
    const handleSubmitSearch = () => {
        if (keyword !== "") {
            console.log("access");
            fetchProduct();
        }
        else{
            navigation("/productList")
        }
    }

    return <>
        <section>
            <div className="d-flex justify-content-between align-items-center text-center" style={{ gap: "20px" }} onClick={handleSearch}>
                <div onClick={handleSubmitSearch}>
                    <Search />
                </div>

                {search && <textarea style={{ width: "200px", height: "30px", overflow: "hidden", opacity: "0.5" }} placeholder="Search your products..." onChange={(event) => { handleChangeKeyword(event) }
                }></textarea>}
            </div>

        </section>
    </>
}
export default SearchProducts;