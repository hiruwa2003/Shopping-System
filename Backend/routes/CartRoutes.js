import express from "express";
import { addToCart, updateCart, getCart } from "../controllers/CartController.js";
import userAuth from "../middleware/userAuth.js";


const CartRoutes = express.Router();

CartRoutes.post("/add", userAuth, addToCart);
CartRoutes.post("/update", userAuth, updateCart);
CartRoutes.get("/get", userAuth, getCart);

export default CartRoutes;