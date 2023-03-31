const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db.database");
const userRouter = require("./Routes/user.routes");
const cartRoutes = require("./Routes/cart.routes");
const checkToken = require("./middleware/user.middleware");
const productRoutes = require("./Routes/product.routes");
const orderRoutes = require("./Routes/order.routes");
// secretkey
let jwt_secretkey = "volvo";
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use(checkToken)
app.use("/cart", cartRoutes)
app.use("/products", productRoutes);
app.use("/order", orderRoutes);


app.listen(process.env.port, () => {
    connectDB();
    console.log(`server is running at ${process.env.port}`);
});


module.exports = jwt_secretkey;