const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },

    lastname: {
        type: String,
        require: true
    },


    mobileNumber: {
        type: Number,
        unique: require,
        require: true
    },

    email: {
        type: String,
        unique: require,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    gender: {
        type: String,
        require: true
    },

    confirmPassword: {
        type: String,
        require: true
    }
}, {
    versionKey: false
});


const userModel = mongoose.model("user", userSchema);

module.exports = userModel;