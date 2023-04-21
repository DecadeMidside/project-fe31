import { createAction } from "@reduxjs/toolkit";

import { AUTH_ACTION } from "../constants/auth.constant";
import { REQUEST } from "../constants/actionType";

export const loginAction = createAction(REQUEST(AUTH_ACTION.LOGIN));
export const registerAction = createAction(REQUEST(AUTH_ACTION.REGISTER));
export const logoutAction = createAction(REQUEST(AUTH_ACTION.LOGOUT));
