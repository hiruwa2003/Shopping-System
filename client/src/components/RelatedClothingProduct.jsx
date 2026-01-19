import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { Link } from "react-router-dom";

const RelatedClothingProduct = ({ category, subCategory, currentProductId }) => {
  const { products, currency } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter(
        (item) =>
          item.category === category &&
          item.subCategory === subCategory &&
          item._id !== currentProductId
      );

      console.log("Related Products:", filtered.slice(0, 8));
      setRelatedProducts(filtered.slice(0, 8));
    }
  }, [products, category, subCategory, currentProductId]);

  if (relatedProducts.length === 0) return null;

  return (
    <>
      <div className="mt-20 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Related Products</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <Link
              to={`/clothing/${item._id}`}
              key={item._id}
              className="border rounded-lg p-3 hover:shadow-lg hover:scale-105 transition transform"
            >
              <img
                src={item.image?.[0] || "/placeholder.png"}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-3"
              />

              <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                {item.name}
              </h3>

              <p className="text-sm font-semibold text-orange-500 mt-1">
                {currency}
                {item.price}
              </p>
            </Link>
          ))}
        </div>
      </div>

      
    </>
  );
};

export default RelatedClothingProduct;
