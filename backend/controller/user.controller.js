const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");

// register logic
const register = (req, res) => {
    const { email,
        password,
        confirmPassword,
        firstname,
        lastname,
        gender,
        mobileNumber } = req.body;
    try {
        bcyrpt.hash(password, 5, async (err, hash) => {
            if (password == confirmPassword) {
                let newUser = userModel({
                    email,
                    firstname,
                    lastname,
                    gender,
                    mobileNumber,
                    confirmPassword: hash,
                    password: hash
                });

                await newUser.save();
                res.status(200).send({ mssg: "register succesful" });
            } else {
                res.status(400).send({ mssg: "password not matching" });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({ mssg: "server error" })
    }
};

// login logic
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await userModel.findOne({ email });
        if (data) {
            bcyrpt.compare(password, data.password, (err, result) => {
                result ? res.status(200).send({ mssg: "login succesful", token: jwt.sign({ userID: data._id }, "volvo") }) : res.status(400).send({ mssg: "invalid password!" });
            })
        } else {
            res.status(400).send({ mssg: "invalid gmail" })
        };
    } catch (error) {
        res.status(400).send({ error })
    };

};


module.exports = { register, login }