import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";

const CartTotal = ({ showCheckout = true }) => {
  const { getCartAmount, currency, delivery_Charge, navigate } = useContext(ShopContext);

  const subTotal = getCartAmount();
  const total = subTotal === 0 ? 0 : subTotal + delivery_Charge;

  return (
    <div className="max-w-sm mx-auto rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3">
        <h2 className="text-base font-semibold text-gray-900">Cart Total</h2>
        <span className="text-xs text-gray-400">Summary</span>
      </div>

      {/* Breakdown */}
      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-medium text-gray-800">
            {currency}{subTotal}.00
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Delivery</span>
          <span className="font-medium text-gray-800">
            {currency}{delivery_Charge}.00
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="mt-4 flex items-center justify-between rounded-lg bg-orange-50 px-3 py-2">
        <span className="text-sm font-semibold text-gray-900">Total</span>
        <span className="text-lg font-bold text-orange-600">
          {currency}{total}.00
        </span>
      </div>

      {/* Helper text */}
      <p className="mt-3 text-xs text-gray-500">
        Taxes and discounts calculated at checkout.
      </p>

      {/* Checkout button */}
      {showCheckout ? (
        <button
          onClick={() => navigate("/placeorder")}
          disabled={subTotal === 0}
          className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition ${
            subTotal === 0
              ? "cursor-not-allowed bg-gray-300"
              : "bg-orange-500 hover:bg-orange-600 active:scale-[0.99]"
          }`}
        >
          Proceed to Checkout
        </button>
      ) : null}
    </div>
  );
};

export default CartTotal;
