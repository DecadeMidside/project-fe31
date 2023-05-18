import { useEffect } from "react";
import { ConfigProvider } from "antd";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import "moment/locale/vi";

import "../App.css";
import UserLayout from "../layout/UserLayout";
import AdminLayout from "../layout/AdminLayout/index";
import AccountPage from "../pages/Account";

import { ROUTES } from "../constant/routes";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import CartPage from "../pages/Cart";
import CheckoutPage from "../pages/Checkout";
import SuccessCheckoutPage from "../pages/Checkout/SuccessCheckOut";
import AboutPage from "../pages/About";
import { getUserInfoAction } from "../redux/actions";
import ServicePage from "../pages/Serviced";
import Dashboard from "../pages/admin/Dashboard";
import ProductManagement from "../pages/admin/ProductManagement";
import UpdateProduct from "../pages/admin/UpdateProduct";
import CreateProduct from "../pages/admin/CreateProduct";
import UserManagement from "../pages/admin/UserManagement";
import OderManagement from "../pages/admin/OderManagement";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const tokenData = jwtDecode(accessToken);
      dispatch(getUserInfoAction({ id: tokenData.sub }));
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <ConfigProvider>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path={ROUTES.USER.HOME} element={<HomePage />} />
          <Route path={ROUTES.USER.ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTES.USER.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.USER.PRODUCT_LIST} element={<ProductList />} />
          <Route path={ROUTES.USER.CHECKOUT} element={<CheckoutPage />} />
          <Route
            path={ROUTES.USER.SUCCESSCHECKOUT}
            element={<SuccessCheckoutPage />}
          />
          <Route path={ROUTES.USER.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.USER.CART} element={<CartPage />} />
          <Route path={ROUTES.USER.SERVICE} element={<ServicePage />} />
          <Route
            path={ROUTES.USER.PRODUCT_DETAIL}
            element={<ProductDetail />}
          />

          <Route />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path={ROUTES.ADMIN.DASHBOARD} element={<Dashboard />} />
          <Route
            path={ROUTES.ADMIN.UPDATE_PRODUCT}
            element={<UpdateProduct />}
          />
          <Route
            path={ROUTES.ADMIN.CREATE_PRODUCT}
            element={<CreateProduct />}
          />
          <Route
            path={ROUTES.ADMIN.PRODUCT_MANAGEMENT}
            element={<ProductManagement />}
          />
          <Route
            path={ROUTES.ADMIN.USER_MANAGEMENT}
            element={<UserManagement />}
          />
          <Route
            path={ROUTES.ADMIN.ODER_MANAGEMENT}
            element={<OderManagement />}
          />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
