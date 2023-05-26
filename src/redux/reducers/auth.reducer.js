import { createReducer } from "@reduxjs/toolkit";

import { AUTH_ACTION } from "../constants/auth.constant";
import { REQUEST, SUCCESS, FAIL } from "../constants/actionType";

const initialState = {
  userInfo: {
    data: {},
    load: true, //để check đúng khi đăng nhập bằng admin/user nên để load = true ngay từ đầu. Vì userInfo luôn được gọi API đầu tiên để check.
    error: "",
  },
  loginData: {
    load: false,
    error: "",
  },
  registerData: {
    load: false,
    error: "",
  },
  changePasswordData: {
    load: false,
    error: "",
  },
};

const authReducer = createReducer(initialState, {
  // LOGIN
  [REQUEST(AUTH_ACTION.LOGIN)]: (state, action) => {
    return {
      ...state,
      loginData: {
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(AUTH_ACTION.LOGIN)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        data: data.user,
      },
      loginData: {
        ...state.loginData,
        load: false,
      },
    };
  },
  [FAIL(AUTH_ACTION.LOGIN)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      loginData: {
        load: false,
        error: error,
      },
    };
  },
  // REGISTER
  [REQUEST(AUTH_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      registerData: {
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(AUTH_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      registerData: {
        ...state.registerData,
        load: false,
      },
    };
  },
  [FAIL(AUTH_ACTION.REGISTER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      registerData: {
        load: false,
        error: error,
      },
    };
  },
  //logout
  [REQUEST(AUTH_ACTION.LOGOUT)]: (state, action) => {
    localStorage.removeItem("accessToken");
    return {
      ...state,
      userInfo: {
        data: {},
        load: false,
        error: "",
      },
    };
  },
  //getInfo
  [REQUEST(AUTH_ACTION.GET_USER_INFO)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(AUTH_ACTION.GET_USER_INFO)]: (state, action) => {
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
  [FAIL(AUTH_ACTION.GET_USER_INFO)]: (state, action) => {
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
  [REQUEST(AUTH_ACTION.GET_USER)]: (state, action) => {
    return {
      ...state,
      users: {
        ...state.users,
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(AUTH_ACTION.GET_USER)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      users: {
        ...state.users,
        data: data,
        load: false,
      },
    };
  },
  [FAIL(AUTH_ACTION.GET_USER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      users: {
        ...state.users,
        load: false,
        error: error,
      },
    };
  },
  // CHANGE_PASSWORD
  [REQUEST(AUTH_ACTION.CHANGE_PASSWORD)]: (state, action) => {
    return {
      ...state,
      changePasswordData: {
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(AUTH_ACTION.CHANGE_PASSWORD)]: (state, action) => {
    return {
      ...state,
      changePasswordData: {
        ...state.changePasswordData,
        load: false,
      },
    };
  },
  [FAIL(AUTH_ACTION.CHANGE_PASSWORD)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      changePasswordData: {
        load: false,
        error: error,
      },
    };
  },
});

export default authReducer;
