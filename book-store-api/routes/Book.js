const express = require('express');
const router = express.Router();
const book = require("../models/book");

router.post("/add", async(req, res) =>{
    console.log(req.body);
    const {book_id, book_name, book_price, image} = req.body;

    try {
        
        const prebook = await book.findOne({book_name:book_name});
        console.log(prebook);

        if(prebook){
            res.status(422).json("this is book is already present");
        }else{
            const addbook = book({
                book_id,book_name,book_price,image
            });

            await addbook.save();
            res.status(201).json(addbook);
            console.log(addbook);
        }

    } 
    catch(error) {
        res.status(422).json(error);
    }
})
router.get("/getbooks", async(req,res)=>{
    try {
        const bookdata = await book.find();
        res.status(201).json(bookdata)
        console.log(bookdata);
    } catch (error) {
        res.status(422).json(error);
    }
})


router.get("/search/:name", async(req,res)=>{
    try {
        console.log(req.params);
        const bookName = {$regex: req.params.name};

        const searchBook = await book.findOne({book_name: bookName});
        console.log(searchBook);
        res.status(201).json(searchBook);
      

    } catch (error) {
        res.status(422).json(error);
    }
})




module.exports=router;