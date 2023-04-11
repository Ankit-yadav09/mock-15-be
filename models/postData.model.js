const mongoose = require("mongoose");

const travellerSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    destination: {type:String, required:true},
    noOfTravellers: {type:Number, required:true},
    budgetPerPerson: {type:Number, required:true},
});

const travellerModel = mongoose.model("traveller",travellerSchema);

module.exports = {travellerModel}