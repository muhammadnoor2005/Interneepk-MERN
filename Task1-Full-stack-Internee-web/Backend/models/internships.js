const db = require("./connection");

const getInternships = async () => {
    try {
        const resp = await db.collection("internships").find().toArray();
        return resp;
    } catch (err) {
        throw(err.message);
    }
    
}

module.exports = {getInternships};