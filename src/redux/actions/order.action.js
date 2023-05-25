import { createAction } from "@reduxjs/toolkit";

import { REQUEST, ORDER_ACTION } from "../constants";

export const orderProductAction = createAction(
  REQUEST(ORDER_ACTION.ORDER_PRODUCT)
);

export const getOrderList = createAction(REQUEST(ORDER_ACTION.GET_ORDER_LIST));

export const getOrderListAdmin = createAction(
  REQUEST(ORDER_ACTION.GET_ORDER_LIST_ADMIN)
);
export const updateOrderAction = createAction(
  REQUEST(ORDER_ACTION.UPDATE_ORDER)
);
