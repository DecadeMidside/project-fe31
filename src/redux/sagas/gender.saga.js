import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getGenderListSaga(action) {
  try {
    const result = yield axios.get("http://localhost:4000/genders");
    yield put({
      type: "GET_GENDER_LIST_SUCCESS",
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: "GET_GENDER_LIST_FAIL",
      payload: {
        error: "Lỗi rồi!",
      },
    });
  }
}

export default function* genderSaga() {
  yield takeEvery("GET_GENDER_LIST_REQUEST", getGenderListSaga);
}
