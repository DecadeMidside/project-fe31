import { useEffect } from "react";
import { ConfigProvider } from "antd";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import "moment/locale/vi";

import "../App.css";
import UserLayout from "../layout/UserLayout";
import AccountPage from "../pages/Account";

import { ROUTES } from "../constant/routes";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import CartPage from "../pages/Cart";
import { getUserInfoAction } from "../redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const tokenData = jwtDecode(accessToken);
      dispatch(getUserInfoAction({ id: tokenData.sub }));
    }
  }, []);
  return (
    <ConfigProvider>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path={ROUTES.USER.HOME} element={<HomePage />} />
          <Route path={ROUTES.USER.ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTES.USER.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.USER.PRODUCT_LIST} element={<ProductList />} />
          <Route path={ROUTES.USER.CART} element={<CartPage />} />
          <Route
            path={ROUTES.USER.PRODUCT_DETAIL}
            element={<ProductDetail />}
          />

          <Route />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
