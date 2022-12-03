const mongoose = require('mongoose');
 const orderSchema = new mongoose.Schema({
    orderid:{
        type: String,
        required: true,
        unique: true,
        index:true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    mobileno:{
        type: Number,
        required: true
    },
    book_name:{
        type: String,
        required: true
    },
    book_price:{
        type: String,
        required: true
    },

 })
 module.exports = new mongoose.model("order", orderSchema);