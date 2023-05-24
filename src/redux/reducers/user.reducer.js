import { createReducer } from "@reduxjs/toolkit";
import { USER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  userList: {
    data: [],
    meta: {},
    load: false,
    error: "",
  },
  userInfo: {
    data: {},
    load: true,
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
  [REQUEST(USER_ACTION.GET_USER_INFO)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.GET_USER_INFO)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        data: data,
        load: false,
      },
    };
  },
  [FAIL(USER_ACTION.GET_USER_INFO)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        load: false,
        error: error,
      },
    };
  },
  [REQUEST(USER_ACTION.UPDATE_USER)]: (state, action) => {
    return {
      ...state,
      updateUserData: {
        ...state.updateUserData,
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.UPDATE_USER)]: (state, action) => {
    return {
      ...state,
      updateUserData: {
        ...state.updateUserData,
        load: false,
      },
    };
  },
  [FAIL(USER_ACTION.UPDATE_USER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateUserData: {
        ...state.updateUserData,
        load: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.DELETE_USER)]: (state, action) => {
    return {
      ...state,
      deleteUserData: {
        ...state.deleteUserData,
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.DELETE_USER)]: (state, action) => {
    return {
      ...state,
      deleteUserData: {
        ...state.deleteUserData,
        load: false,
      },
    };
  },
  [FAIL(USER_ACTION.DELETE_USER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteUserData: {
        ...state.deleteUserData,
        load: false,
        error: error,
      },
    };
  },
});

export default userReducer;
