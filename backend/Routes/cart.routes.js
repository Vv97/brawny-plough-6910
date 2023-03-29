const { Router } = require("express");
const cartModel = require("../model/cart.model");
const cartRoutes = Router();
const jwt = require("jsonwebtoken")

cartRoutes.get("/", async (req, res) => {
    const { userID } = jwt.verify(req.headers.authorization, "volvo");
    let cartData = await cartModel.find({ userID })
    res.status(200).send(cartData)
});

cartRoutes.post("/", async (req, res) => {
    try {
        const newCartItem = cartModel(req.body);
        await newCartItem.save();
        res.status(200).send({ mssg: "iteam added to the card" });
    } catch (error) {
        res.status(400).send({ mssg: "bad request" });
    }
})

module.exports = cartRoutes;