const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    title: {
        type: String,
        Request: true
    },

    device: {
        type: String,
        Request: true
    },


    body: {
        type: String,
        Request: true
    },

    userID: {
        type: String,
    }
}, {
    versionKey: false
});

const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;