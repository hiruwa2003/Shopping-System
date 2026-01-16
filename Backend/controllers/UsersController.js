import userModel from "../models/userModel.js";

export const getUserData = async(req, res)=> {
     try {
         
          const userId = req.user.userId;

          const user = await userModel.findById(userId);

          if(!user) {
               res.json({success: false, message: "User not Found"});
          }

           res.json({success: true, userData: {
                 firstName : user.firstName,
                 isAccountVerified : user.isAccountVerified
           }});
     } catch (error) {
        res.json({success: false, message: error.message});
     }
}