const express = require("express");
const dotenv = require("dotenv")
const connection = require("./database/db.js");
const Routes = require("./routes/routes.js")
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express()

// initialise the dotenv
dotenv.config();


// json data ko chhantne(parsing) k liye
app.use(bodyParser.json({extended:true}))

// http request me jo data hai use encrypt krne k liye
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());

// to handle cors error during api request becoz frontend and backend both running on diff. port
app.use(cors());

// if you dont have default end route then leave first parameter empty
app.use("/",Routes);

const PORT = 8000;
connection()

app.listen(PORT,()=> console.log(`server Running on PORT : ${PORT}`))