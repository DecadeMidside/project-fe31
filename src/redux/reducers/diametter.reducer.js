import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  diametterList: {
    data: [],
    load: false,
    error: "",
  },
};

const diametterReducer = createReducer(initialState, {
  GET_DIAMETTER_LIST_REQUEST: (state, action) => {
    return {
      ...state,
      diametterList: {
        ...state.diametterList,
        load: true,
      },
    };
  },
  GET_DIAMETTER_LIST_SUCCESS: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      diametterList: {
        ...state.diametterList,
        data: data,
        load: false,
      },
    };
  },
  GET_DIAMETTER_LIST_FAIL: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      diametterList: {
        ...state.diametterList,
        load: false,
        error: error,
      },
    };
  },
});

export default diametterReducer;
