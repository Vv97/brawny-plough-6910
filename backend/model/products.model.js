const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    image1: {
        type: String,
        require: true
    },

    image2: {
        type: String,
        require: true
    },

    rating: {
        type: Number,
        require: true
    },

    price: {
        type: Number,
        require: true
    },

    discount: {
        type: String,
        require: true
    },

    availability: {
        type: String,
        require: true
    },

    vedio: {
        type: String,
        require: true
    },

    jewellerytype: {
        type: String,
        require: true
    },

    category: {
        type: String,
        require: true
    },

    size: {
        type: Number,
        require: true
    },

    material: {
        type: String,
        require: true
    }
}, {
    versionKey: false
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel