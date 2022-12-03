const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    book_id: {
        type: Number,
        required: true,
        unique: true
    },
    book_name: {
        type: String,
        required: true,
        unique: true
    },
    book_price: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model("book", bookSchema);