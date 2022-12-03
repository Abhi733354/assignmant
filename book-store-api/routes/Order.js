const express = require('express');
const order = require("../models/order");
const router = express.Router();

router.post("/placeorder", async(req, res) =>{
    console.log(req.body);
    const {name, address, mobileno, product_name, product_price} = req.body;

    try {
        
        // const preproduct = await product.findOne({product_name:product_name});
        // console.log(preproduct);

        // if(preproduct){
        //     res.status(422).json("this is product is already present");
        // }else{
            const addorder = order ({
                name, address, mobileno, book_name, book_price
            });

            await addorder.save();
            res.status(201).json(addorder);
            console.log(addorder);
        }

    // } 
    catch(error) {
        res.status(422).json(error);
    }
})

router.get("/allorder", async(req,res)=>{
    try {
        const orderdata = await order.find();
        res.status(201).json(orderdata)
        console.log(orderdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;