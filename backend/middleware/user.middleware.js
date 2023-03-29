const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const checkToken = (req, res, next) => {
    let auth = req.headers.authorization;
    try {
        let { userID } = jwt.verify(auth, "volvo");
        if (req.method == "POST" || req.method == "GET") {
            req.body.userID = userID;
        }
        next()
    } catch (error) {
        res.status(400).send({ mssg: "require sighup!" })
    }
}

module.exports = checkToken;