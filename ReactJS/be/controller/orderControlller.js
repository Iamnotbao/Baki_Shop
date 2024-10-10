const { Buffer } = require("buffer");
const Order = require("../model/orderModel.js");
const Product = require("../model/productModel.js");
const axios = require("axios")


//create new Order
const createOrder = async (req, res) => {
    console.log("ok");

    const { shippingInfo,
        orderItems,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,

    } = req.body;


    try {
        const order = await Order.create({
            shippingInfo,
            orderItems,
            paymentInfo,
            itemPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paidAt: Date.now(),
            user: req.user.userId,
        });
        await order.save();
        return res.status(200).json({
            success: true,
            order
        })
    }
    catch (error) {
        console.error("Error saving order:", error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }

}

//Get One Order
const getOneOrder = async (req, res, next) => {
    const singleOrder = await Order.find({ user: req.user.userId });
    console.log(singleOrder);
    if (!singleOrder) {
        return next(new Error("Order not found with this Id", 404));
    }
    res.status(200).json({
        success: true,
        Order
    })

}
//Get All Order

const getAllOrder = async (req, res) => {
    let total;
    try {
        const orders = await Order.find();
        total = 0;
        orders.forEach(order => {
            total += order.totalPrice
        }
        )
        res.status(200).json({
            success: true,
            total,
            orders
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err
        })
    }
    console.log(total);


    res.status(200)
}

//Update order 

const updateOrder = async (req, res) => {
    const update_order = await Order.findById(req.params.id);
    // console.log(update_order);

    try {
        if (update_order) {
            if (update_order.orderStatus === "Delivered") {
                return res.status(400).json({
                    success: false,
                    message: "This order has been delivered!!!"
                })
            }
            update_order.orderStatus = req.body.status;
            console.log(update_order);
            if (update_order.orderStatus === "Delivered") {
                update_order.deliveredAt = Date.now();
            }

            update_order.orderItems.forEach(async (order) => {
                await updateQuantity(order.product, order.quantity);
            });

            await update_order.save({ validateBeforeSave: false });

            return res.status(200).json({
                success: true,
                updateOrder
            })
        }
    }
    catch (err) {
        return res.status(400).json({
            success: false,
            message: err
        })
    }



}
async function updateQuantity(id, quantity) {
    const product = await Product.findById(id);
    console.log(product);
    product.stock -= quantity;
    await product.save({ validateBeforeSave: false });
}


//Delete product
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        console.log(order);
        if (!order) {
            return res.status(500).json({
                success: false,
                message: "The order is not exsit!!!"
            })
        }
        await Order.deleteOne({ _id: req.params.id })
        return res.status(200).json({
            success: true,
            message: "Delete successfully!!!"
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err
        })
    }

}
async function momoPayment(req, res) {
    var accessKey = 'F8BBA842ECF85';
    var secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
    var orderInfo = 'pay with MoMo';
    var partnerCode = 'MOMO';
    var redirectUrl = 'https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b';
    var ipnUrl = 'https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b';
    var requestType = "payWithMethod";
    var amount = '50000';
    var orderId = partnerCode + new Date().getTime();
    var requestId = orderId;
    var extraData ='';
    var paymentCode = 'T8Qii53fAXyUftPV3m9ysyRhEanUs9KlOPfHgpMR0ON50U10Bh+vZdpJU7VY4z+Z2y77fJHkoDc69scwwzLuW5MzeUKTwPo3ZMaB29imm6YulqnWfTkgzqRaion+EuD7FN9wZ4aXE1+mRt0gHsU193y+yxtRgpmY7SDMU9hCKoQtYyHsfFR5FUAOAKMdw2fzQqpToei3rnaYvZuYaxolprm9+/+WIETnPUDlxCYOiw7vPeaaYQQH0BF0TxyU3zu36ODx980rJvPAgtJzH1gUrlxcSS1HQeQ9ZaVM1eOK/jl8KJm6ijOwErHGbgf/hVymUQG65rHU2MWz9U8QUjvDWA==';
    var orderGroupId ='';
    var autoCapture =true;
    var lang = 'vi';
    
    //before sign HMAC SHA256 with format
    //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
    var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType;
    //puts raw signature
    console.log("--------------------RAW SIGNATURE----------------")
    console.log(rawSignature)
    //signature
    const crypto = require('crypto');
    var signature = crypto.createHmac('sha256', secretKey)
        .update(rawSignature)
        .digest('hex');
    console.log("--------------------SIGNATURE----------------")
    console.log(signature)
    
    //json object send to MoMo endpoint
    const requestBody = JSON.stringify({
        partnerCode : partnerCode,
        partnerName : "Test",
        storeId : "MomoTestStore",
        requestId : requestId,
        amount : amount,
        orderId : orderId,
        orderInfo : orderInfo,
        redirectUrl : redirectUrl,
        ipnUrl : ipnUrl,
        lang : lang,
        requestType: requestType,
        autoCapture: autoCapture,
        extraData : extraData,
        orderGroupId: orderGroupId,
        signature : signature
    });
    //Create the HTTPS objects
    const options = {
        method: 'POST',
        url: 'https://test-payment.momo.vn/v2/gateway/api/create',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(requestBody)
        },
        data:requestBody
    }
    let result;
    try{
        result = await axios(options)
        return res.status(200).json(result.data)
    }
    catch(err){
        return res.status(500).json({
            message:"Cannot take momo"
        })
    }


}


module.exports = {
    createOrder,
    getOneOrder,
    getAllOrder,
    updateOrder,
    deleteOrder,
    momoPayment
}
