const { Router } = require("express");
const orderRoutes = Router();
const jwt = require("jsonwebtoken");
const orderModel = require("../model/order.model");


orderRoutes.get("/", async (req, res) => {
    try {
        const orderDetails = await orderModel.find();
        res.status(200).send(orderDetails);
    } catch (error) {
        res.status(500).send({ mssg: error.message });
    };
});


orderRoutes.post("/", async (req, res) => {
    try {
        let orderdetails = orderModel(req.body);
        await orderdetails.save();
        res.status(200).send({ mssg: "Order added successfully!" });
    } catch (error) {
        res.status(500).send({ mssg: error.message });
    }
})


orderRoutes.patch("/:orderId", async (req, res) => {
    const { orderId } = req.params;
    try {
        await orderModel.findByIdAndUpdate({ _id: orderId }, req.body);
        res.status(200).send({ mssg: "Order was updated successfully!" });
    } catch (error) {
        res.status(400).send(error);
    };
});

orderRoutes.delete("/:orderId", async (req, res) => {
    const { orderId } = req.params;
    try {
        await orderModel.findByIdAndDelete({ _id: orderId });
        res.status(200).send({ mssg: "Order was deleted successfully!" });
    } catch (error) {
        res.status(400).send(error);
    };
})


module.exports = orderRoutes