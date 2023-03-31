const { Router } = require("express");
const cartRoutes = Router();
const { cartAdd, cartDelete, cartGet } = require("../controller/cart.controller");

cartRoutes.get("/", cartGet);

cartRoutes.post("/", cartAdd)

cartRoutes.delete("/:cardId", cartDelete)

module.exports = cartRoutes;