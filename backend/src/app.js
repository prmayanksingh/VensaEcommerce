const express = require('express');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)


module.exports = app;