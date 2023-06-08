import  jwt  from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

// Header>>Authentication Bearer token 

var userAuthentication = async (req, res , next)=>{
    let token;
    const { authorization } = req.headers;
    if(authorization && authorization.startsWith('Bearer') ){
        try {
            token = authorization.split(' ')[1];
            // Verifing the user Token 

            const { userID } = jwt.verify(token , process.env.JWT_KEY); 

            // Get User from Token 
            req.user = await UserModel.findById(userID).select('-password');
            next();
        } catch (error) {
            res.send({ "status": "failed", "message": "No Token in Header !" });
        }
    }

    if(!token){
        res.status(401).send({"status": "failed", "message": "UnAuthorized User, No Token !"})
    }

}

export default userAuthentication;