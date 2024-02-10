const express = require("express");
const router = express.Router();
const {getInternships} =require("../controllers/internship");

router.get("/", async(req,res) => {
    try {
        const resp = await getInternships();
        res.status(200).send(resp);
    } catch (err) {
        res.send(err.message);
    }
})

module.exports = router;