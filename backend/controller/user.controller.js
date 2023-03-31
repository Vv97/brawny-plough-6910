const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
require("dotenv").config();

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
                res.status(200).send({ mssg: "Registration succesfull !" });
            } else {
                res.status(400).send({ mssg: "Password mismatch" });
            }
        });
    } catch (error) {
        res.status(400).send({ mssg: error.message });
    }
};

// login logic
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await userModel.findOne({ email });
        let obj = {};

        // require data send for profile
        if (data) {
            obj.firstname = data.firstname;
            obj.email = data.email;
            obj.mobileNumber = data.mobileNumber;
        }

        if (data) {
            bcyrpt.compare(password, data.password, (err, result) => {
                result ? res.status(200).send({ mssg: "Login succesfull!", userdata: obj, token: jwt.sign({ userID: data._id }, process.env.jwtkey) }) : res.status(400).send({ mssg: "invalid password!" });
            })
        } else {
            res.status(400).send({ mssg: "Invalid gmail" })
        };
    } catch (error) {
        res.status(400).send({ mssg: error.message });
    };

};


module.exports = { register, login }