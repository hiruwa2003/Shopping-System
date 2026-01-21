import express from "express";
import {addClothingProduct, removeClothingProduct, listClothingProducts, getSingleClothingProduct} from "../controllers/ClothingProductController.js";
import upload from "../middleware/multer.js";


const clothingProductRouter = express.Router();

clothingProductRouter.post('/add',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]), addClothingProduct);
clothingProductRouter.post('/remove', removeClothingProduct);
clothingProductRouter.post('/single', getSingleClothingProduct);
clothingProductRouter.get('/list', listClothingProducts);

export default clothingProductRouter;