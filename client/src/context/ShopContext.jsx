import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "LKR ";
  const delivery_Charge = 200;
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(true);

  const value = {
    products,
    currency,
    delivery_Charge,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
