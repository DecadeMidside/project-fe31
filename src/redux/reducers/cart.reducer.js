import { createReducer } from "@reduxjs/toolkit";
import { notification } from "antd";
import { CART_ACTION, REQUEST } from "../constants";

const initialState = {
  cartList: JSON.parse(localStorage.getItem("cartList")) || [],
};

const cartReducer = createReducer(initialState, {
  // ADD_TO_CART
  [REQUEST(CART_ACTION.ADD_TO_CART)]: (state, action) => {
    const { id } = action.payload;
    const newCartList = [...state.cartList];
    const existIndex = state.cartList.findIndex((item) => item.id === id);
    if (existIndex !== -1) {
      newCartList.splice(existIndex, 1, {
        ...state.cartList[existIndex],
      }) &&
        notification.error({
          message: "This product already in your cart!",
        });
    } else {
      newCartList.unshift(action.payload);
      notification.success({
        message: "Added to cart!",
      });
    }
    localStorage.setItem("cartList", JSON.stringify(newCartList));
    return {
      ...state,
      cartList: newCartList,
    };
  },
  //REMOVE_CART_ITEM
  [REQUEST(CART_ACTION.REMOVE_CART_ITEM)]: (state, action) => {
    return {
      ...state,
    };
  },
});

export default cartReducer;
