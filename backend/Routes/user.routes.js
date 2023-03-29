const { Router } = require("express");
const { register, login } = require("../controller/user.controller");
const userRouter = Router();
//middleware
const checkemail = require("../middleware/checkemail.middleware");

// register patch
userRouter.post("/register", checkemail, register);

// login patch
userRouter.post("/login", login)

module.exports = userRouter;