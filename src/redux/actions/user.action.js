import { createAction } from "@reduxjs/toolkit";

import { USER_ACTION, REQUEST } from "../constants";

export const getUserListAction = createAction(
  REQUEST(USER_ACTION.GET_USER_LIST)
);
