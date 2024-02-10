const {getReviews} = require("../models/review");

exports.getReviews = async () => {
    try {
        const resp = await getReviews();
        return resp;
    } catch (err) {
        throw(err);
    }
}
