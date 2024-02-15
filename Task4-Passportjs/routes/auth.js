const express = require("express");
const { createUser } = require("../controllers/auth");
const router = express.Router();
const passport = require("passport");

// render login form
router.get("/login",(req,res) => {
    if(req.user){
        res.redirect("/profile")
    }else{
        res.render("auth/login")
    }
    
})

// when user logs in
router.post("/login",passport.authenticate("local",{
    failureRedirect:"wrongInfo"

}), (req,res) => {
        if(req.user){
        res.redirect("/profile");
    }
})


// render signup form
router.get("/signup",(req,res) => {
    if(req.user){
        res.redirect("/profile")
    }else{
        res.render("auth/signup")
    }
   
})

// when user signup
router.post("/signup", async(req,res) => {
    try {
        const resp = await createUser(req.body.name,req.body.username,req.body.password);
        
        res.status(200).send(resp);
    } catch (err) {
        res.send(err.message)
    }

})

// when logout
router.get("/logout", async(req,res) => {
    req.logout((err) => {
        if (err){
            console.log(err);
        }
        res.redirect("login");
    });

})

// when user enter wrong email or password
router.get("/wrongInfo",(req,res) => {
    res.render("auth/wrongInfo") 
})
module.exports = router;