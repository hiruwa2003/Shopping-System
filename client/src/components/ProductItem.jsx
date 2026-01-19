import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="text-gray-700 cursor-pointer"
      to={`/clothing-product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt={name}
        />
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
