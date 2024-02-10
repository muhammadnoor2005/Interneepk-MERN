const {getInternships} = require("../models/internships");

exports.getInternships = async () => {
    try {
        const resp = await getInternships();
        return resp;
    } catch (err) {
        throw(err);
    }
}

module.exports = {getInternships};