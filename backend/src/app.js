const express = require("express");
const authRoute = require("./routes/auth.route");
const productRoute = require("./routes/product.route");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.static(path.join(__dirname, '../public')));


app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.get("*name", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = app;
