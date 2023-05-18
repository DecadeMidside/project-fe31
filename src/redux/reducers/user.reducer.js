import { createReducer } from "@reduxjs/toolkit";
import { USER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  userList: {
    data: [],
    meta: {},
    load: false,
    error: "",
  },
};

const userReducer = createReducer(initialState, {
  [REQUEST(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    return {
      ...state,
      userList: {
        ...state.userList,
        load: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    const { data, meta, more } = action.payload;
    return {
      ...state,
      userList: {
        ...state.userList,
        data: more ? [...state.userList.data, ...data] : data,
        meta: meta,
        load: false,
      },
    };
  },
  [FAIL(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      userList: {
        ...state.userList,
        load: false,
        error: error,
      },
    };
  },
});

export default userReducer;
