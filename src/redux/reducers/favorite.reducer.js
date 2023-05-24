import { createReducer } from "@reduxjs/toolkit";
import { FAVORITE_ACTION, REQUEST, SUCCESS } from "../constants";

const initialState = {
  favoriteList: {
    data: [],
    load: false,
    error: "",
  },
};

const favoriteReducer = createReducer(initialState, {
  GET_FAVORITE_LIST_REQUEST: (state, action) => {
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        load: true,
      },
    };
  },
  GET_FAVORITE_LIST_SUCCESS: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        data: data,
        load: false,
      },
    };
  },

  [REQUEST(FAVORITE_ACTION.UN_FAVORITE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      unFavoriteData: {
        ...state.unFavoriteData,
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(FAVORITE_ACTION.UN_FAVORITE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      unFavoriteData: {
        ...state.unFavoriteData,
        load: false,
      },
    };
  },
});

export default favoriteReducer;
