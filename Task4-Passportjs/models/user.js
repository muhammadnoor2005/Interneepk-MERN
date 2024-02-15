const Users = require("./db/users");


const findUser = (username) => {
    return new Promise((resolve,reject) => {
        const user = Users.findOne({username});
        if(!user){
            reject("No users");
        }
        resolve(user);
  
    });
};

const createUser = async (name,username,password) => {
    try{
        const user = await findUser(username);

        if(user){
            throw new Error("Email already exists!");
        } else{
            const writeData = new Users({
                name,username,password
            });
            
            await writeData.save();
            
            return("User created");
        }
    }  catch(err){
        throw(err);
    };
};


module.exports = {findUser, createUser};