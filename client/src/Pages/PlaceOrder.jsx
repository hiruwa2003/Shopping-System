import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faMoneyBillWave,
  faPhone,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faPaypal } from "@fortawesome/free-brands-svg-icons";
import Title from "../components/Title.jsx";
import CartTotal from "../components/CartTotal.jsx";
import { ShopContext } from "../context/ShopContext.jsx";


const PlaceOrder = () => {
  const [method, setMethod] = React.useState("visa");

  const {navigate} = React.useContext(ShopContext);

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:flex-row">
        {/* Left Section */}
        <section className="w-full lg:max-w-[520px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <Title
                text1="Deliver to"
                text2="Your Location"
                description="Please provide your delivery details below."
              />
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-600">
                    First Name
                  </label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <FontAwesomeIcon icon={faTruckFast} />
                    </span>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Email Address
                </label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Street Address
                </label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <input
                    type="text"
                    placeholder="Street"
                    className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-600">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="City"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="State"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-600">
                    Zip Code
                  </label>
                  <input
                    type="number"
                    placeholder="Zip Code"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="Country"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Mobile
                </label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <input
                    type="number"
                    placeholder="Mobile"
                    className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <aside className="flex w-full flex-col gap-8 lg:max-w-[420px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <CartTotal showCheckout={false} />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Title
              text1="Payment"
              text2="Method"
              description="Select your preferred payment method."
            />

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={() => setMethod("visa")}
                className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  method === "visa"
                    ? "border-slate-400 bg-white text-slate-900 shadow-sm"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                    <FontAwesomeIcon icon={faCcVisa} />
                  </span>
                  Pay with Visa / Card
                </span>
                <span className="text-xs text-slate-500">**** 4242</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod("paypal")}
                className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  method === "paypal"
                    ? "border-slate-400 bg-white text-slate-900 shadow-sm"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-500 shadow-sm">
                    <FontAwesomeIcon icon={faPaypal} />
                  </span>
                  Pay with PayPal
                </span>
                <span className="text-xs text-slate-500">Secure</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod("cod")}
                className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  method === "cod"
                    ? "border-slate-400 bg-white text-slate-900 shadow-sm"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-500 shadow-sm">
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                  </span>
                  Cash on Delivery
                </span>
                <span className="text-xs text-slate-500">Pay later</span>
              </button>
            </div>

            {method === "visa" && (
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-700">Visa Card Details</p>
                <div className="mt-4 grid gap-3">
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-slate-400"
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-slate-400"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-slate-400"
                    />
                  </div>
                </div>
              </div>
            )}

            {method === "paypal" && (
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-700">PayPal Account</p>
                <div className="mt-4 grid gap-3">
                  <input
                    type="email"
                    placeholder="PayPal Email"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-slate-400"
                  />
                </div>
              </div>
            )}

            {method === "cod" && (
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-700">Cash on Delivery</p>
                <p className="mt-2 text-sm text-slate-600">
                  Pay with cash when your order arrives. Please keep the exact amount ready.
                </p>
              </div>
            )}

            <button onClick={() => navigate('/order')}
              type="button"
              className="mt-6 w-full rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 active:scale-[0.99]"
            >
              Place Order
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PlaceOrder;
