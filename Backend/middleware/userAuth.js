import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized. Login Again" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (!tokenDecode?.id) {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized. Login Again" });
    }

    // ✅ Fetch user from database and attach full user info
    const userModel = (await import("../models/userModel.js")).default;
    const user = await userModel.findById(tokenDecode.id).select("-password");
    
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }
    
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};

export default userAuth;
