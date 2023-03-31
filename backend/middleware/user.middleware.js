const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const checkToken = (req, res, next) => {
    let auth = req.headers.authorization;
    try {
        let { userID } = jwt.verify(auth, process.env.jwtkey);
        if (userID) {
            if (req.method == "POST" || req.method == "GET") {
                req.body.userID = userID;
            }
            next()
        } else {
            res.status(400).send({ mssg: "register required!" })
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = checkToken;