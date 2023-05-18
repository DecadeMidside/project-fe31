import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import productReducer from "./redux/reducers/product.reducer";
import categoryReducer from "./redux/reducers/category.reducer";
import diametterReducer from "./redux/reducers/diametter.reducer";
import genderReducer from "./redux/reducers/gender.reducer";
import authReducer from "./redux/reducers/auth.reducer";
import reviewReducer from "./redux/reducers/review.reducer";
import cartReducer from "./redux/reducers/cart.reducer";
import userReducer from "./redux/reducers/user.reducer";
import locationReducer from "./redux/reducers/location.reducer";

import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    diametter: diametterReducer,
    cart: cartReducer,
    location: locationReducer,
    gender: genderReducer,
    review: reviewReducer,
    user: userReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export { store };
