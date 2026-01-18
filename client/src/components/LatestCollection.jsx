import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-12 max-w-7xl mx-auto px-6">
      {/* Title + optional description */}
      <Title
        text1="Latest"
        text2="Collection"
        description="Check out our newest arrivals! Stylish and comfortable clothing perfect for any occasion."
      />

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">
        {latestProducts.map((item) => (
          <ProductItem
            key={item.id}
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

export default LatestCollection;
