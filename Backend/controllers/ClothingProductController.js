import { v2 as cloudinary } from "cloudinary";
import clothingProductModel from "../models/ClothingProductModel.js";

export const addClothingProduct = async (req, res) => {
  try {
    // Convert types
    const price = Number(req.body.price);
    const bestseller = req.body.bestseller === "true";
    const size = Array.isArray(req.body.size)
      ? req.body.size
      : JSON.parse(req.body.size || "[]");

    const { name, description, category, subCategory } = req.body;

    // Get files from multer
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    // Collect images
    const images = [image1, image2, image3, image4].filter(Boolean);

    // Upload to Cloudinary
    const imageUrl = await Promise.all(
      images.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // Product data
    const productData = {
      name,
      description,
      price,
      category,
      subCategory,
      size,
      bestseller,
      image: imageUrl,
      date: Date.now(),
    };
    const product = new clothingProductModel(productData);
    await product.save();

    res.json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const listClothingProducts = async (req, res) => {
  try {
    const products = await clothingProductModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const removeClothingProduct = async (req, res) => {
  try {
    const { id, _id } = req.body;
    const productId = id || _id;

    if (!productId) {
      return res.json({ success: false, message: "Product id is required" });
    }

    const product = await clothingProductModel.findByIdAndDelete(productId);

    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getSingleClothingProduct = async (req, res) => {
  try {
    const { id, _id } = req.body;
    const productId = id || _id;

    if (!productId) {
      return res.json({ success: false, message: "Product id is required" });
    }

    const product = await clothingProductModel.findById(productId);

    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, product });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
