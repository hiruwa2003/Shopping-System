import CartModel from "../models/cartModel.js";

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

    let cart = await CartModel.findOne({ userId });

    if (!cart) {
      cart = new CartModel({ userId, items: {} });
    }

    const cartData = { ...(cart.items || {}) };

    if (!cartData[cartItemId]) {
      cartData[cartItemId] = {};
    } else {
      cartData[cartItemId] = { ...cartData[cartItemId] };
    }

    if (cartData[cartItemId][size]) {
      cartData[cartItemId][size] += qty;
    } else {
      cartData[cartItemId][size] = qty;
    }

    cart.items = cartData;
    cart.markModified("items");
    await cart.save();

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

    let cart = await CartModel.findOne({ userId });

    if (!cart) {
      cart = new CartModel({ userId, items: {} });
    }

    const cartData = { ...(cart.items || {}) };

    if (!cartData[cartItemId]) {
      cartData[cartItemId] = {};
    } else {
      cartData[cartItemId] = { ...cartData[cartItemId] };
    }

    if (qty <= 0) {
      delete cartData[cartItemId][size];
      if (Object.keys(cartData[cartItemId]).length === 0) {
        delete cartData[cartItemId];
      }
    } else {
      cartData[cartItemId][size] = qty;
    }

    cart.items = cartData;
    cart.markModified("items");
    await cart.save();

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

    const cart = await CartModel.findOne({ userId });

    return res.json({ success: true, cartData: cart?.items || {} });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { itemId, productId, size } = req.body;
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

    const cart = await CartModel.findOne({ userId });

    if (!cart) {
      return res.json({ success: true, cartData: {} });
    }

    const cartData = { ...(cart.items || {}) };

    if (cartData[cartItemId]) {
      cartData[cartItemId] = { ...cartData[cartItemId] };
    }

    if (cartData[cartItemId]?.[size] !== undefined) {
      delete cartData[cartItemId][size];
      if (Object.keys(cartData[cartItemId]).length === 0) {
        delete cartData[cartItemId];
      }
    }

    cart.items = cartData;
    cart.markModified("items");
    await cart.save();

    return res.json({ success: true, cartData });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};