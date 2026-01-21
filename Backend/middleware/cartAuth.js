import jwt from "jsonwebtoken";

const cartAuth = (req, res, next) => {
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

    req.user = { _id: tokenDecode.id };
    return next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};

export default cartAuth;
