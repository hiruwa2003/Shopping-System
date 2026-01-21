import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import { FaShoppingCart } from "react-icons/fa";
import { assets } from "../assets/assets.js";
import Footer from "../components/Footer.jsx";
import CartTotal from "../components/CartTotal.jsx";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, removeFromCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const data = [];

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          data.push({
            _id: itemId,
            size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }

    setCartData(data);
  }, [cartItems, products]);

  return (
    <>
    <div className="border-t pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* TITLE */}
      <div className="mb-10">
        <Title
          text1="Your"
          text2="Cart"
          description="Review the items you've added to your cart before placing the order."
        />
      </div>

      {/* CONTENT */}
      {cartData.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-gray-300 bg-white py-20 text-gray-500 shadow-sm">
          <FaShoppingCart size={48} className="text-gray-400" />
          <p className="text-lg font-semibold text-gray-700">Your cart is empty</p>
          <p className="text-sm">Looks like you haven't added anything yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.9fr] gap-8">
          {/* CART ITEMS */}
          <div className="flex flex-col gap-5">
            {cartData.map((item, index) => {
              const productData = products.find(
                (prod) => prod._id === item._id
              );

              if (!productData) return null;

              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                >
                  {/* LEFT: IMAGE */}
                  <div className="w-full sm:w-28">
                    <img
                      src={productData.image?.[0]}
                      alt={productData.name}
                      className="h-28 w-full object-cover rounded-lg"
                    />
                  </div>

                  {/* MIDDLE: DETAILS */}
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-800">
                      {productData.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Size: <span className="font-medium text-gray-700">{item.size}</span>
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      Unit Price
                    </p>
                    <p className="text-lg font-bold text-orange-500">
                      {currency}
                      {productData.price}
                    </p>
                  </div>

                  {/* RIGHT: QUANTITY + DELETE */}
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-start gap-1">
                      <label className="text-xs text-gray-500">Qty</label>
                      <input
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === "0"
                            ? null
                            : updateQuantity(
                                item._id,
                                item.size,
                                Number(e.target.value)
                              )
                        }
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                        className="w-20 rounded-lg border border-gray-300 px-2 py-1.5 text-center text-sm focus:border-orange-400 focus:outline-none"
                      />
                    </div>

                    <button
                      onClick={() => removeFromCart(item._id, item.size)}
                      className="flex items-center justify-center rounded-full border border-gray-200 p-2 text-gray-500 hover:border-orange-300 hover:text-orange-500"
                      aria-label="Remove item"
                    >
                      <img className="h-4 w-4" src={assets.bin_icon} alt="Delete" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SUMMARY */}
          <div className="lg:sticky lg:top-6 h-max">
            <CartTotal />
          </div>
        </div>
      )}
    </div>
   <Footer />
    </>
  );
};

export default Cart;
