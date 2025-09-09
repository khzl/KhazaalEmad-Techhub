// Enter Point
require('dotenv').config({path: __dirname + "/.env"});
const express = require('express');
const app = express();
const productsRouter = require('./routes/products');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

// routes
app.use('/products', productsRouter);


// error handler
app.use(errorHandler);


// Check is Run 
console.log("PG_USER IS: " , process.env.PG_USER);

const PORT = process.env.PORT || 3002;
app.listen(PORT , () => {
    console.log(`Server running on http://localhost:${PORT}`);
});