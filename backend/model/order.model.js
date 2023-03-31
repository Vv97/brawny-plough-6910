const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    userID: {
        type: String,
        require: true
    },

    products: [
        {
            productId: {
                type: String,
                require: true
            },

            quantity: {
                type: Number,
                default: 1
            }
        }
    ],

    amount: { type: String, require: true },
    address: { type: String, require: true },
    date: { type: String, require: true },
    status: { type: String, default: "pending" }
}, {
    versionKey: false
});

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;