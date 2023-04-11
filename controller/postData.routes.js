const express = require("express");

const {travellerModel} = require("../models/postData.model");

const travellerRouter = express.Router();

travellerRouter.post("/",(req,res)=>{
    let travellerInfo = req.body;
    console.log(travellerInfo)
   
    const traveller=new travellerModel(travellerInfo)
    traveller.save();
     res.send("data posted")
})
module.exports = {travellerRouter}