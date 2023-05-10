import { fork } from "redux-saga/effects";

import authSaga from "./auth.saga";
import productSaga from "./product.saga";
import categorySaga from "./category.saga";
import diametterSaga from "./diametter.saga";
import genderSaga from "./gender.saga";
import reviewSaga from "./review.saga";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(productSaga);
  yield fork(categorySaga);
  yield fork(diametterSaga);
  yield fork(reviewSaga);
  yield fork(genderSaga);
}
