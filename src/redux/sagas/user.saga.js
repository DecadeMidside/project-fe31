import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { USER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getUserListSaga(action) {
  try {
    const { data } = action.payload;

    const result = yield axios.get("http://localhost:4000/users", data);

    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.GET_USER_LIST),
      payload: {
        error: "Lỗi rồi!",
      },
    });
  }
}

export default function* userSaga() {
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_LIST), getUserListSaga);
}
