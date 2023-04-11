const express = require("express");

const connect = require("./config/db");

const {travellerRouter} = require("./controller/postData.routes");

const app = express();

app.use(express.json());
app.use("/",travellerRouter);
// app.use("/postdata",travellerRouter);


app.listen(8080, async()=>{
    try{
        await connect;
        console.log("connection successful")

    }catch(err){
        console.log("Error while connecting !")
    }
})



// mongodb+srv://ankityadav:ankityadav@cluster0.t910917.mongodb.net/?retryWrites=true&w=majority