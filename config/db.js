const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb+srv://ankityadav:ankityadav@cluster0.t910917.mongodb.net/travellersdata?retryWrites=true&w=majority");
// const connect = mongoose.connect("mongodb://127.0.0.1:27017/newtraveller?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4");

module.exports = {connect}