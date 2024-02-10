const express = require("express");
const { getReviews } = require("../controllers/reviews");
const router = express.Router();


router.get("/", async(req,res) => {
    try {
        const resp = await getReviews();
        res.status(200).send(resp);
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;