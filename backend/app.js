require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

app.use(express.json());

const productRoutes = require("./routes/product.route")
app.use("/products",productRoutes)



const PORT = 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running with port no ${PORT}`);
});

//ox9zTTaimaOXx1uQ
