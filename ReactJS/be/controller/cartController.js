const Cart = require("../model/cartModel");


const getCart = async (req, res) => {
    const userID = req.params.userId;
    try {
        let cart = await Cart.findOne({ userId: userID }).populate("items.productId");
        if (!cart) {
            cart = new Cart({
                userID, items: []
            })
        }
        return res.status(200).json({
            success: "true",
            message: "Get cart successfully!!!",
            cart
        })
    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}
const addCart = async (req, res) => {
    console.log(req.body);
    const userId = req.body.userId;
    const items = req.body.items;
    console.log("receive items:", items);
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({
                userId, items: []
            })
        };
        items.forEach(item => {
            const existItem = cart.items.find(cItem => cItem.productId && cItem.productId._id.toString() === item.item._id.toString());
            console.log(existItem);
            if (existItem) {
                existItem.quantity += item.quantity;
            }
            else {
                cart.items.push({
                    productId: item.item._id,
                    quantity: item.quantity
                });
            }
        });
        await cart.save();
        console.log("addCart", cart);

        return res.status(200).json({
            success: true,
            message: "Add cart succesfully!!!",
            cart
        })
    }
    catch (err) {
        console.log(err);

    }
}
const deleteCart = async (req, res) => {
    console.log("receive things", req.params);
    const userId = req.params.userId;
    const productID = req.params.productId;
    const cart = await Cart.findOne({ userId: userId }).populate("items.productId");
    if (cart !== null) {
        console.log("Before delete", cart.items.length);
        const updateList = cart.items.filter((item) => {
            console.log("check ID", item.productId._id.toString());
            return item.productId._id.toString() !== productID.toString()
        })
        cart.items = updateList;

        await cart.save();
        console.log("After delete", cart.items.length);
        return res.status(200).json({
            success:"true",
            cart
        })
    }





}
// const deleteItemCart =async()=>{
//     const userID =11
//     const productID = 1
//     console.log("ok");
//     try{

//         const cart  = await Cart.findOneAndUpdate(
//             {userId:userID},
//             {$pull :{items:{
//                 productID:productID
//             }}},
//             {new:true}
//         ).populate("items.productId");

//         if(!cart){
//             console.log("not Found");

//         }

//     }catch(err){
//         console.log(err);

//     }
// }


module.exports = {
    getCart,
    addCart,
    deleteCart
}