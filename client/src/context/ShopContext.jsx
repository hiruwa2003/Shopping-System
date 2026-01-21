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

  useEffect(() => {
    axios.defaults.withCredentials = true;
  }, []);

  // Add to cart
 const addToCart = async (ItemId, size) => {
  if (!size) {
    toast.error("Please select a size before adding to cart.");
    return;
  }

  // Clone current cart to avoid direct mutation
  const cartData = structuredClone(cartItems);

  // Update local cart (optimistic)
  if (!cartData[ItemId]) cartData[ItemId] = {};
  cartData[ItemId][size] = (cartData[ItemId][size] || 0) + 1;

  setCartItems(cartData);

  // Sync with backend (cookie-based auth)
  try {
    const response = await axios.post(
      "/api/cart/add",
      {
        productId: ItemId,
        size: size,
        quantity: 1,
      },
      { withCredentials: true }
    );
    if (!response.data?.success) {
      toast.error(response.data?.message || "Failed to sync cart with server.");
      getCartData();
    } else if (response.data?.cartData) {
      setCartItems(response.data.cartData);
    }
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to sync cart with server.";
    toast.error(message);
    console.error(error);
    getCartData();
  }
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
  const updateQuantity = async (ItemId, size, quantity) => {
    const cartData = structuredClone(cartItems);
    if (cartData[ItemId] && cartData[ItemId][size] !== undefined) {
      cartData[ItemId][size] = quantity;
      setCartItems(cartData);
    }

    try {
      const response = await axios.post(
        "/api/cart/update",
        {
          productId: ItemId,
          size,
          quantity,
        },
        { withCredentials: true }
      );
      if (!response.data?.success) {
        toast.error(response.data?.message || "Failed to update cart on server.");
        getCartData();
      } else if (response.data?.cartData) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to update cart on server.";
      toast.error(message);
      console.error(error);
      getCartData();
    }
  };

  const removeFromCart = async (ItemId, size) => {
    try {
      const response = await axios.post(
        "/api/cart/remove",
        {
          productId: ItemId,
          size,
        },
        { withCredentials: true }
      );
      if (!response.data?.success) {
        toast.error(response.data?.message || "Failed to remove item from server cart.");
        getCartData();
      } else if (response.data?.cartData) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to remove item from server cart.";
      toast.error(message);
      console.error(error);
      getCartData();
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
      const response = await axios.get("/api/clothing-product/list");
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

  const getCartData = async () => {
    try {
      const response = await axios.get("/api/cart/get", {
        withCredentials: true,
      });
      if (response.data.success) {
        setCartItems(response.data.cartData || {});
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error);
      if (error?.response?.status === 401) {
        setCartItems({});
      }
    }
  };

  useEffect(() => {
    getCartData();
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
    removeFromCart,
    getCartAmount,
    navigate,
    backendURL,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
