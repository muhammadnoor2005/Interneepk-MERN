
// middleware to check whether the user is logged in or not
exports.authorize = (req,res,next) => {
    if(req.user){
        return next();
    }
    res.redirect("auth/login");
}