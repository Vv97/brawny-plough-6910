const { Router } = require("express");
const { getProducts, addProduct, updateProduct, deleteProduct, getProductById } = require("../controller/products.controller");
const productModel = require("../model/products.model");
const productRoutes = Router();

// get product
productRoutes.get("/", getProducts);

// add product
productRoutes.post("/", addProduct);

// edit product
productRoutes.patch("/:productId", updateProduct);

// delete product
productRoutes.delete("/:deleteId", deleteProduct)

productRoutes.get("/:productID", getProductById)

module.exports = productRoutes;