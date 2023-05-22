import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { CATEGORY_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getCategoryListSaga(action) {
  try {
    const result = yield axios.get("http://localhost:4000/categories", {
      params: {
        _embed: "products",
        isDelete: false,
      },
    });
    yield put({
      type: "GET_CATEGORY_LIST_SUCCESS",
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: "GET_CATEGORY_LIST_FAIL",
      payload: {
        error: "Lỗi rồi!",
      },
    });
  }
}
function* deleteCategorySaga(action) {
  try {
    const { id, ...data } = action.payload;
    const result = yield axios.patch(`http://localhost:4000/categories/${id}`, {
      isDelete: true,
    });
    yield put({
      type: REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST),
      payload: { ...data },
    });
    yield put({
      type: SUCCESS(CATEGORY_ACTION.DELETE_CATEGORY),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(CATEGORY_ACTION.DELETE_CATEGORY),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* categorySaga() {
  yield takeEvery("GET_CATEGORY_LIST_REQUEST", getCategoryListSaga);
  yield takeEvery(REQUEST(CATEGORY_ACTION.DELETE_CATEGORY), deleteCategorySaga);
}
