const bcrypt = require("bcrypt");
const { createUser } = require("../models/user");

exports.createUser = async (name,username,password) => {
    try{
        const hashedPass = await bcrypt.hash(password,12);
        const resp = await createUser(name,username,hashedPass);

        return resp;
    } catch(err){
        throw err;
    };
};