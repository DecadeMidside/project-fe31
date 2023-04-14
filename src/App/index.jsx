import { ConfigProvider } from "antd";
import { Routes, Route } from "react-router-dom";

import "../App.css";
import UserLayout from "../layout/UserLayout";

import AccountPage from "../pages/Account";

import { ROUTES } from "../constant/routes";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";
import ProductList from "../pages/ProductList";

function App() {
  return (
    <ConfigProvider>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path={ROUTES.USER.HOME} element={<HomePage />} />
          <Route path={ROUTES.USER.ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTES.USER.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.USER.PRODUCT_LIST} element={<ProductList />} />

          <Route />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
