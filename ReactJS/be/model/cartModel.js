const mongoose = require("mongoose");

const cartProductSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
        default: 1
    },
}
);
const cartSchema = new mongoose.Schema({
    userId: {
        type: Number,
        ref: "User",
        require: true,
        unique: true
    },
    items: [cartProductSchema],
    updateAt: {
        type: Date,
        default: Date.now,
    },
});


cartSchema.post('save', async function (doc, next) {
    try {
        await doc.populate('items.productId');
        next();
    } catch (error) {
        next(error);
    }
});


module.exports = mongoose.model("Cart", cartSchema);

