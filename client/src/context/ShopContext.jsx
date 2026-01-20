import { createContext, useState, useEffect, use } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "LKR ";
  const delivery_Charge = 200;
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  const addToCart = async (ItemId,size) => {

      if (!size) {
          toast.error("Please select a size before adding to cart.");
          return;
      }
      let cartData = structuredClone(cartItems);

      if (cartData[ItemId]) {
           if (cartData[ItemId][size]) {
              cartData[ItemId][size] += 1;
           } else {
              cartData[ItemId][size] = 1;
           }
      }
      else {
          cartData[ItemId] = {};
          cartData[ItemId][size] = 1;
      }

      setCartItems(cartData);
  }

  const getCartCount = () => {
      let count = 0;
      for(const items in cartItems){
          for(const item in cartItems[items]){
              try{
                 if(cartItems[items][item] > 0){
                     count += cartItems[items][item];
                 }
              } catch(error){
              }
          }
      }
      return count;
  }

  const updateQuantity = async (ItemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (cartData[ItemId]) {
      if (cartData[ItemId][size]) {
        cartData[ItemId][size] = quantity;
      }
    }

    setCartItems(cartData);
  };


   const getCartAmount =  () => {
     let totalAmount = 0;
      for (const items in cartItems) {
        let itemInfo = products.find((product) => product._id === items);
        for(const item in cartItems[items]){
            try{
               if(cartItems[items][item] > 0){
                   totalAmount += itemInfo.price * cartItems[items][item];
               }
            } catch(error){
            }
        }
      }
      return totalAmount;
   }

  const value = {
    products,
    currency,
    delivery_Charge,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
};

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
