const { createUser }  = require('../queries/users.queries');

exports.signupForm = ( req , res , next ) =>{
    res.render('users/user-form',{ error : null });
}
exports.signup = async ( req , res , next ) =>{
    const body = req.body ;
    try{
        const user = await createUser(body);
        res.redirect('/');
    }catch (e) {
        res.render('uses/user-form' , { errors : [ e.message ]})
    }

}