import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { USER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getUserListSaga(action) {
  try {
    const { searchKey } = action.payload;

    const result = yield axios.get("http://localhost:4000/users", {
      params: {
        _sort: "id",
        _order: "desc",
        q: searchKey,
        isDelete: false,
        _embed: ["orders", "orderDetails"],
      },
    });

    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_LIST),
      payload: {
        data: result.data,
        meta: result.meta,
        more: result.more,
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
function* deleteUserSaga(action) {
  try {
    const { id, ...filterParams } = action.payload;
    const result = yield axios.patch(`http://localhost:4000/users/${id}`, {
      isDelete: true,
    });
    yield put({
      type: REQUEST(USER_ACTION.GET_USER_LIST),
      payload: {
        ...filterParams,
      },
    });
    yield put({
      type: SUCCESS(USER_ACTION.DELETE_USER),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.DELETE_USER),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}
function* getUserInfoAdminSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/users/${id}`);

    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_INFO),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.GET_USER_INFO),
      payload: {
        error: "error",
      },
    });
  }
}
function* updateUserSaga(action) {
  try {
    const { id, data, callback } = action.payload;
    const result = yield axios.patch(`http://localhost:4000/users/${id}`, data);

    yield callback();
    yield put({
      type: SUCCESS(USER_ACTION.UPDATE_USER),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.UPDATE_USER),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* userSaga() {
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_LIST), getUserListSaga);
  yield takeEvery(REQUEST(USER_ACTION.DELETE_USER), deleteUserSaga);
  yield takeEvery(REQUEST(USER_ACTION.UPDATE_USER), updateUserSaga);
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_INFO), getUserInfoAdminSaga);
}
