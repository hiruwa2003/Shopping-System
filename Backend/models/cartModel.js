import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true, index: true },
    items: { type: Object, default: {} },
  },
  { timestamps: true }
);

const CartModel = mongoose.models.cart || mongoose.model("cart", cartSchema);

export default CartModel;
