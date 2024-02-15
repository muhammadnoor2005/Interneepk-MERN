const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5dzq9dn.mongodb.net/passport`)
.then(res => console.log("DB connected")).catch(err => console.log(err));

module.exports = mongoose.connection;