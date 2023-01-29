require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 2001

const products_routes = require("./routes/products");

app.get("/" , (req, res) => {
    res.send ("Yo hey wassup");
});

//middleware
app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Connected!`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();