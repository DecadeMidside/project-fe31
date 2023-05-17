import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getDiametterListSaga(action) {
  try {
    const result = yield axios.get("http://localhost:4000/diametters", {
      params: {
        _embed: "products",
      },
    });
    yield put({
      type: "GET_DIAMETTER_LIST_SUCCESS",
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: "GET_DIAMETTER_LIST_FAIL",
      payload: {
        error: "Lỗi rồi!",
      },
    });
  }
}

export default function* diametterSaga() {
  yield takeEvery("GET_DIAMETTER_LIST_REQUEST", getDiametterListSaga);
}
