const express = require("express");
const router = express.Router();

// porfile page
router.get("/",(req,res) => {
    res.render("profile",{user:req.user});
})

module.exports = router;