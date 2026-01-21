import userModel from "../models/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const { itemId, productId, size, quantity } = req.body;
    const cartItemId = itemId || productId;

    const userId = req.user?._id || req.body.userId;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    if (!cartItemId || !size) {
      return res
        .status(400)
        .json({ success: false, message: "Item id and size are required" });
    }

    const qty = Number.isFinite(Number(quantity)) ? Number(quantity) : 1;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = user.cartData || {};

    if (!cartData[cartItemId]) {
      cartData[cartItemId] = {};
    }

    if (cartData[cartItemId][size]) {
      cartData[cartItemId][size] += qty;
    } else {
      cartData[cartItemId][size] = qty;
    }

    user.cartData = cartData;
    await user.save();

    return res.json({ success: true, cartData });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


export const updateCart = async (req, res) => {
  try {
    const { itemId, productId, size, quantity } = req.body;
    const cartItemId = itemId || productId;
    const userId = req.user?._id || req.body.userId;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    if (!cartItemId || !size) {
      return res
        .status(400)
        .json({ success: false, message: "Item id and size are required" });
    }

    const qty = Number(quantity);

    if (!Number.isFinite(qty)) {
      return res
        .status(400)
        .json({ success: false, message: "Quantity must be a number" });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = user.cartData || {};

    if (!cartData[cartItemId]) {
      cartData[cartItemId] = {};
    }

    if (qty <= 0) {
      delete cartData[cartItemId][size];
      if (Object.keys(cartData[cartItemId]).length === 0) {
        delete cartData[cartItemId];
      }
    } else {
      cartData[cartItemId][size] = qty;
    }

    user.cartData = cartData;
    await user.save();

    return res.json({ success: true, cartData });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user?._id || req.body.userId;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const user = await userModel.findById(userId).select("cartData");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.json({ success: true, cartData: user.cartData || {} });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};