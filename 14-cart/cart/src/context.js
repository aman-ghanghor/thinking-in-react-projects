import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import cartItems from "./data";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // increase
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  // decrease
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  // remove item
  const remove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  // toggle amount
  const toggleAmount = () => {
    dispatch({ type: "TOGGLE_AMOUNT" });
  };
  // get total
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ ...state, increase, decrease, remove, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

// custome hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
