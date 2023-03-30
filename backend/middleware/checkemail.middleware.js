const userModel = require("../model/user.model");


// check user email is exist or not 
const checkemail = async (req, res, next) => {
    const { email } = req.body;
    try {
        let userData = await userModel.findOne({ email });
        if (userData) {
            res.status(400).send({ mssg: "email exist already" });
        } else {
            next()
        };
    } catch (error) {
        res.status(400).send(error);
    };
};

module.exports = checkemail;