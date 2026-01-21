import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "LKR ";
  const delivery_Charge = 200;
  const backendURL = "http://localhost:5000";

  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  // Add to cart
  const addToCart = (ItemId, size) => {
    if (!size) {
      toast.error("Please select a size before adding to cart.");
      return;
    }

    const cartData = structuredClone(cartItems);

    if (cartData[ItemId]) {
      if (cartData[ItemId][size]) {
        cartData[ItemId][size] += 1;
      } else {
        cartData[ItemId][size] = 1;
      }
    } else {
      cartData[ItemId] = {};
      cartData[ItemId][size] = 1;
    }

    setCartItems(cartData);
  };

  // Get total cart item count
  const getCartCount = () => {
    let count = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        try {
          if (cartItems[itemId][size] > 0) {
            count += cartItems[itemId][size];
          }
        } catch {}
      }
    }
    return count;
  };

  // Update quantity
  const updateQuantity = (ItemId, size, quantity) => {
    const cartData = structuredClone(cartItems);
    if (cartData[ItemId] && cartData[ItemId][size] !== undefined) {
      cartData[ItemId][size] = quantity;
      setCartItems(cartData);
    }
  };

  // Get total amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const product = products.find((p) => p._id === itemId);
      if (!product) continue;

      for (const size in cartItems[itemId]) {
        try {
          totalAmount += product.price * cartItems[itemId][size];
        } catch {}
      }
    }
    return totalAmount;
  };

  // Fetch products
  const getProductData = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/clothing-product/list`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  // Run once
  useEffect(() => {
    getProductData();
  }, []);

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
    backendURL,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
