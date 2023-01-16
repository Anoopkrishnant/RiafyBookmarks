import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser"
import bookMarkRoute from "./Routes/bookMarkRoute.js";



import cors from 'cors'
dotenv.config();


const app = express()

app.use(cors())
//Middleware
app.use(bodyParser.json({limit: '30mb', extended :true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended :true}));

//Routes
app.use("/", bookMarkRoute );


//Connect Database

mongoose.connect(process.env.MONGOOSE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("DB Connected Successfully");
    });


app.listen(process.env.PORT, () => {
    console.log("Backend Sever is Running !");
})
