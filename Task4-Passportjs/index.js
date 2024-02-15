if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}


const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("./models/connection");
const cors = require("cors");
const auth = require("./routes/auth");
const app = express();
const profile = require("./routes/profile");
const {authorize} = require("./passport/authorize");

const passport = require("passport");
const { initializingPassport } = require("./passport/passportConfig");
const expressSession = require("express-session");

initializingPassport(passport);


app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(cors());

app.use(expressSession({secret: "secret",resave:false, saveUninitialized:false}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(process.cwd(), "public")));
app.set("view engine","ejs");
app.set("views","views");
 

app.use("/auth",auth);
app.use("/profile",authorize,profile);


app.listen(3000,() => {
    console.log("Server started");
});
