import React from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import Footer from "../components/Footer.jsx";

const Orders = () => {
  const { products, currency } = React.useContext(ShopContext);

  return (
    <>
    <div className="min-h-[80vh] bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Title
            text1="My"
            text2="Orders"
            description="Track, return, or buy things again you have ordered before."
          />
        </div>

        <div className="space-y-4">
          {products.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <img
                    src={item.image[0]}
                    alt={item.title}
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-base font-semibold text-slate-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">Order ID: #CC-20{index}26</p>
                    <p className="mt-2 text-sm text-slate-600">
                      {currency}
                      {item.price}.00
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                  <span className="rounded-full bg-slate-100 px-3 py-1">Qty: 1</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Size: M</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">20 Jan 2026</span>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  <span className="font-medium text-emerald-600">Ready to ship</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                    View Details
                  </button>
                  <button className="rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-600 active:scale-[0.99]">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     <Footer/>
    </>
  );
};

export default Orders;
