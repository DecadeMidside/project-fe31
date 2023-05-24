import { createAction } from "@reduxjs/toolkit";
import { CATEGORY_ACTION, REQUEST } from "../constants";

export const getCategoryListAction = createAction("GET_CATEGORY_LIST_REQUEST");
export const deleteCategoryAction = createAction(
  REQUEST(CATEGORY_ACTION.DELETE_CATEGORY)
);
