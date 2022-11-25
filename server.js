/* 
    # Type :
      > commonjs : asli javascript
      > module   : javascript versi ES6
*/

import express from "express";
import cors from    "cors"; // cors digunakan untuk by pass komunikasi server to server
import db from "./config/database.config.js";
import productRouter from "./routes/product.route.js";

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// men-generate table
try {
    const connectiondb = await db.authenticate(); //koneksi database
    console.log(">> Success connect to database");
} catch (error){
    console.log(">> Error database connection : ", error);
}

app.use("/products", productRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});