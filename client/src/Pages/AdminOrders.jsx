import React from "react";
import Title from "../components/Title.jsx";

const AdminOrders = () => {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <Title
        text1="Order"
        text2="Management"
        description="Review recent orders and update fulfillment status."
      />

      <div className="space-y-4">
        {["#ORD-1204", "#ORD-1205", "#ORD-1206"].map((orderId) => (
          <div
            key={orderId}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">{orderId}</p>
                <p className="mt-1 text-xs text-slate-500">Jan 21, 2026</p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                  3 items
                </span>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">
                  Pending
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                  $ 75.00
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                View Details
              </button>
              <button className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-600">
                Mark as Shipped
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;
