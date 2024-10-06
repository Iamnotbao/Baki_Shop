const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    shippingInfo: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        pinCode:{
            type:Number,
            required:true,
        }
        ,phone:{
            type:Number,
            requied:true
        }
    },
    orderItems:[
        {
            name:{
                type:String,
                require:true
            },
            price:{
                type:Number,
                require:true
            },
            quantity:{
                type:Number,
                required:true
            },
            image:{
                type:String,
                require:true
            },
            product:{
                type:mongoose.Schema.ObjectId,
                ref:"Product",
                required:true,
            },
        },
    ],
    user:{
        type:Number,
        ref:"User",
        require:true,

    },
    paymentInfo:{
        id:{
            type:String,
            required:true,
        },
        status :{
            type:String,
            required:true
        },

    },
    paidAt:{
        type:Date,
        required:true
    },
    itemPrice:{
        type:Number,
        default:0
    },
    taxPrice:{
        type:Number,
        default:0
    },
    shippingPrice:{
        type:Number,
        default:0
    },
    totalPrice:{
        type:Number,
        default:0
    },
    orderStatus :{
        type:String,
        required:true,
        default:"processing"
    },
    deliveredAt: Date,
    createAt:{
        type:Date,
        default:Date.now
    },


});
orderSchema.post('save', async function (doc, next) {
    try {
        await doc.populate('orderItems.product');
        next();
    } catch (error) {
        next(error);
    }
});
module.exports= mongoose.model("Order",orderSchema);