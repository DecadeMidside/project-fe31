import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import { ORDER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* orderProductSaga(action) {
  try {
    const { data, products, callback } = action.payload;
    console.log(
      "🚀 ~ file: order.saga.js:9 ~ function*orderProductSaga ~ action.payload:",
      action.payload
    );
    const result = yield axios.post("http://localhost:4000/orders", data);
    for (let i = 0; i < products.length; i++) {
      yield axios.post("http://localhost:4000/orderDetails", {
        orderId: result.data.id,
        productId: products[i].id,
        name: products[i].name,
        price: products[i].price,
        image: products[i].image,
      });
    }
    yield callback();
    yield put({
      type: SUCCESS(ORDER_ACTION.ORDER_PRODUCT),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.ORDER_PRODUCT),
      payload: {
        error: "Fail!",
      },
    });
  }
}

function* getOrderListAdminSaga(action) {
  // const { data } = action.payload;

  try {
    const result = yield axios.get("http://localhost:4000/orders", {
      params: {
        _embed: ["user", "product", "orderDetails"],
        _sort: "id",
        _order: "asc",
      },
    });
    yield put({
      type: SUCCESS(ORDER_ACTION.GET_ORDER_LIST_ADMIN),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.GET_ORDER_LIST_ADMIN),
      payload: {
        error: "Lỗi rồi!",
      },
    });
  }
}

function* getOrderListSaga(action) {
  try {
    const { userId } = action.payload;
    const result = yield axios.get("http://localhost:4000/orders", {
      params: {
        userId: userId,
        _embed: "orderDetails",
      },
    });
    yield put({
      type: SUCCESS(ORDER_ACTION.GET_ORDER_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.GET_ORDER_LIST),
      payload: {
        error: "Fail!",
      },
    });
  }
}
function* updateOrderSaga(action) {
  try {
    const { id, status } = action.payload;
    const result = yield axios.patch(`http://localhost:4000/orders/${id}`, {
      status: status,
    });
    yield put({
      type: REQUEST(ORDER_ACTION.GET_ORDER_LIST_ADMIN),
    });
    yield put({
      type: SUCCESS(ORDER_ACTION.UPDATE_ORDER),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.UPDATE_ORDER),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* orderSaga() {
  yield takeEvery(REQUEST(ORDER_ACTION.ORDER_PRODUCT), orderProductSaga);
  yield takeEvery(REQUEST(ORDER_ACTION.GET_ORDER_LIST), getOrderListSaga);
  yield takeEvery(REQUEST(ORDER_ACTION.UPDATE_ORDER), updateOrderSaga);
  yield takeEvery(
    REQUEST(ORDER_ACTION.GET_ORDER_LIST_ADMIN),
    getOrderListAdminSaga
  );
}
