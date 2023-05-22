import { createReducer } from "@reduxjs/toolkit";
import { CATEGORY_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  categoryList: {
    data: [],
    load: false,
    error: "",
  },
};

const categoryReducer = createReducer(initialState, {
  GET_CATEGORY_LIST_REQUEST: (state, action) => {
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        load: true,
      },
    };
  },
  GET_CATEGORY_LIST_SUCCESS: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        data: data,
        load: false,
      },
    };
  },
  GET_CATEGORY_LIST_FAIL: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        load: false,
        error: error,
      },
    };
  },
  [REQUEST(CATEGORY_ACTION.DELETE_CATEGORY)]: (state, action) => {
    return {
      ...state,
      deleteCategoryData: {
        ...state.deleteCategoryData,
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(CATEGORY_ACTION.DELETE_CATEGORY)]: (state, action) => {
    return {
      ...state,
      deleteCategoryData: {
        ...state.deleteCategoryData,
        load: false,
      },
    };
  },
  [FAIL(CATEGORY_ACTION.DELETE_CATEGORY)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteCategoryData: {
        ...state.deleteCategoryData,
        load: false,
        error: error,
      },
    };
  },
});

export default categoryReducer;
