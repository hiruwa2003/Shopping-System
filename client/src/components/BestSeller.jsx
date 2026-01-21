import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
      const bestProducts = products.filter((item) => (item.bestseller));
      setBestSellers(bestProducts.slice(0, 5));
    }, [products]);

  return (
    <div className="my-12 max-w-7xl mx-auto px-6">
      {/* Title + Description */}
      <Title
        text1="Best"
        text2="Sellers"
        description="Explore our top-selling clothing items that customers love. Quality, comfort, and style all in one."
      />

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestSellers.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}   
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
