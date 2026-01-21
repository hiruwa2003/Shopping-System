import express from "express";
import { addToCart, updateCart, getCart, removeFromCart } from "../controllers/CartController.js";
import cartAuth from "../middleware/cartAuth.js";


const CartRoutes = express.Router();

CartRoutes.post("/add", cartAuth, addToCart);
CartRoutes.post("/update", cartAuth, updateCart);
CartRoutes.post("/remove", cartAuth, removeFromCart);
CartRoutes.get("/get", cartAuth, getCart);

export default CartRoutes;