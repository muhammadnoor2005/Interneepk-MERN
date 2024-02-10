if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}


const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("./models/connection");
const cors = require("cors");
const internships = require("./routes/internships");
const reviews = require("./routes/reviews");
const app = express();


app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(cors());

app.set("view engine","ejs");
app.set("views","views");
 

app.use("/internships",internships);
app.use("/reviews",reviews);


app.listen(8000,() => {
    console.log("Server started");
});
