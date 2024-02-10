const db = require("./connection");

const getReviews = async () => {
    try {
        const resp = await db.collection("reviews").find().toArray();
        return resp;
    } catch (err) {
        throw(err.message);
    }
    
}

module.exports = {getReviews};