const express = require('express');
const mongoose = require('mongoose');
const { getUser, createUser, loginUser, authToken, loginAdmin } = require('./controller/userController.js');
const { getRoles } = require('./controller/roleController.js');
const cors = require('cors');
const cookieParser  = require('cookie-parser');


const logger = require("morgan");
const { createProducts, getAllProducts, updateProducts, deleteProduct, productDetails, productSearch } = require('./controller/productController.js');
const { createOrder, getOneOrder, getAllOrder, updateOrder, deleteOrder, momoPayment, callBackMomo, checkStatus } = require('./controller/orderControlller.js');
const { getCart, addCart, deleteCart } = require('./controller/cartController.js');

const app = express();
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/check-cookies', (req, res) => {
    console.log("ok");
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;
    console.log("access Token :",accessToken);
    
    if (accessToken && refreshToken) {
        res.status(200).json({ message: 'Cookies are present', accessToken, refreshToken });
    } else {
        res.status(400).json({ message: 'Cookies are missing' });
    }
});

mongoose.connect('mongodb+srv://baolecit20:aOK52QZHOH5GKuL1@cluster0.f8fzz.mongodb.net/Baki_Shop?retryWrites=true&w=majority');

app.listen(3000,() => console.log("Server is runninng"));


//admin
app.post("/api/admin",loginAdmin);


//users
app.get("/api/users",authToken,getUser);

app.get("/api/roles",authToken,getRoles);

app.post("/api/users/createUser",createUser);

app.post("/api/users/login", loginUser);


//products

app.get("/api/products/search",productSearch);

app.get("/api/products",authToken,getAllProducts);

app.post("/api/products/createProduct",authToken,createProducts);

app.put("/api/products/:id",authToken,updateProducts);

app.delete("/api/products/:id",authToken,deleteProduct);

app.get("/api/products/:id",authToken,productDetails);






//Order
app.post("/api/orders/newOrder",authToken,createOrder);

app.get("/api/orders/:userId",authToken,getOneOrder);

app.get("/api/orders",authToken, getAllOrder);

app.put("/api/orders/:id",authToken,updateOrder);

app.delete("/api/orders/:id",authToken,deleteOrder);

//Cart
app.get("/api/carts/:userId",getCart)

app.post("/api/carts",addCart);


app.delete("/api/carts/:userId/item/:productId",deleteCart);

app.post("/api/payment", momoPayment);

app.post("/callback",callBackMomo)

app.post("/api/check-status", checkStatus)

