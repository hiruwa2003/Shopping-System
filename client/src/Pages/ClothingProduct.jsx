import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/assets.js";
import RelatedClothingProduct from "../components/RelatedClothingProduct.jsx";
import Footer from "../components/Footer.jsx";

const ClothingProduct = () => {
  const { ClothingProductId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    if (products && products.length > 0) {
      const found = products.find((item) => item._id === ClothingProductId);
      if (found) {
        setProductData(found);
        setMainImage(found.image?.[0] || "");
      }
    }
  }, [ClothingProductId, products]);

  if (!productData) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        Loading product...
      </div>
    );
  }

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* LEFT SIDE - Images */}
        <div className="flex flex-col lg:flex-row gap-6 lg:w-1/2">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto">
            {productData.image?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover rounded-lg border cursor-pointer p-1 transition
                  ${
                    mainImage === img
                      ? "border-orange-500 shadow-md"
                      : "border-gray-300 hover:border-orange-400"
                  }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={mainImage}
              alt={productData.name}
              className="w-full sm:w-[90%] border rounded-xl p-3 shadow-md object-contain
                         transition-transform hover:scale-105"
            />
          </div>
        </div>

        {/* RIGHT SIDE - Details */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900">
            {productData.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <img src={assets.star_icon} className="w-3.5 h-3.5" />
              <img src={assets.star_icon} className="w-3.5 h-3.5" />
              <img src={assets.star_icon} className="w-3.5 h-3.5" />
              <img src={assets.star_icon} className="w-3.5 h-3.5" />
              <img src={assets.star_dull_icon} className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm text-gray-500">(122 reviews)</span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold text-orange-500">
            {currency}
            {productData.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed md:w-4/5">
            {productData.description}
          </p>

          {/* Size Selector */}
          <div>
            <p className="font-medium mb-2">Select Size</p>
            <div className="flex flex-wrap gap-3">
              {productData.sizes?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-4 py-1.5 rounded-full border text-sm transition
                    ${
                      size === item
                        ? "bg-orange-500 text-white border-orange-500"
                        : "border-gray-300 text-gray-700 hover:border-orange-400"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="bg-orange-500 text-white text-sm font-medium
                       px-4 py-2 rounded-md w-fit
                       hover:bg-orange-600 active:scale-95 transition"
          >
            Add to Cart
          </button>

          {/* Info */}
          <div className="mt-6 border-t pt-4 text-sm text-gray-500 flex flex-col gap-1">
            <p> 100% Original product</p>
            <p> Cash on delivery available</p>
            <p> Easy 7 days returns & exchanges</p>
          </div>
        </div>
      </div>
        {/*Description & Reviews */}
          <div className="mt-20">
  {/* Tabs */}
  <div className="flex border-b">
    <button className="px-6 py-3 text-sm font-medium border-b-2 border-orange-500 text-orange-500">
      Description
    </button>
    <button className="px-6 py-3 text-sm text-gray-500 hover:text-orange-500 transition">
      Reviews (122)
    </button>
  </div>

  {/* Content */}
  <div className="border border-t-0 px-8 py-6 text-sm text-gray-600 leading-relaxed">
    <p className="mb-4">
      This is an original and unique piece of clothing, designed to deliver
      both style and comfort for everyday wear.
    </p>

    <p className="mb-4">
      Made from high-quality, breathable materials that ensure durability,
      long-lasting color, and a soft feel on the skin.
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>Premium fabric with superior stitching</li>
      <li>Comfortable fit suitable for all-day wear</li>
      <li>Easy to wash and maintain</li>
      <li>Perfect for casual and semi-formal occasions</li>
    </ul>
  </div>
</div>
    {/* display related products */}
     <RelatedClothingProduct
       category={productData.category}
       subCategory={productData.subCategory}
       currentProductId={productData._id}
     />
    </div>
    <Footer />
    </>
  );
};

export default ClothingProduct;
