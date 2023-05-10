import { createAction } from "@reduxjs/toolkit";

import { CART_ACTION, REQUEST } from "../constants";

export const addToCartAction = createAction(REQUEST(CART_ACTION.ADD_TO_CART));

export const removeCartItemAction = createAction(
  REQUEST(CART_ACTION.REMOVE_CART_ITEM)
);
