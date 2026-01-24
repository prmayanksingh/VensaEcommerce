const express = require("express");
const authRoute = require("./routes/auth.route");
const productRoute = require("./routes/product.route");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

module.exports = app;
