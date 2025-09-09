require("dotenv").config();
const express = require("express");
const useRoutes = require("./routes/products");

const app = express();

// Global MiddleWare
app.use(express.json());

//Routes 
app.use("/products", useRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT , () => {
    console.log(`Simple app running on port ${PORT}`);
});

module.exports = app;