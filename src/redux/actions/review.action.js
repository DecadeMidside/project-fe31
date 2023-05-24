import { createAction } from "@reduxjs/toolkit";

import { REVIEW_ACTION, REQUEST } from "../constants";

export const getReviewListAction = createAction(
  REQUEST(REVIEW_ACTION.GET_REVIEW_LIST)
);
export const getReviewListAdminAction = createAction(
  REQUEST(REVIEW_ACTION.GET_REVIEW_LIST_ADMIN)
);
export const replyToReviewAction = (data) => {
  return {
    type: "REPLY_TO_REVIEW",
    payload: data,
  };
};

export const sendReviewAction = createAction(
  REQUEST(REVIEW_ACTION.SEND_REVIEW)
);
