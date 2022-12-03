const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const book = require("./routes/Book");
import order from "./models/order";
import User from "./routes/User";
const cors = require("cors");
const port = 8003;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})
app.use(book);
app.use(order);
app.use(User);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});
