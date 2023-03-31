
const cartModel = require("../model/cart.model");
const jwt = require("jsonwebtoken");

const cartGet = async (req, res) => {
    const { userID } = jwt.verify(req.headers.authorization, process.env.jwtkey);
    let cartData = await cartModel.find({ userID })
    res.status(200).send(cartData)
}

const cartAdd = async (req, res) => {
    try {
        const newCartItem = cartModel(req.body);
        await newCartItem.save();
        res.status(200).send({ mssg: "Item added to the card" });
    } catch (error) {
        res.status(500).send({ mssg: "Bad request" });
    }
}


const cartDelete = async (req, res) => {
    const { cardId } = req.params;
    try {
        await cartModel.findByIdAndDelete({ _id: cardId });
        res.status(200).send({ mssg: "Item deleted succesful" });
    } catch (error) {
        res.status(400).send({ mssg: error.message });
    };

}


module.exports = { cartAdd, cartGet, cartDelete };