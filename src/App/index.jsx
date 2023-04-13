import { ConfigProvider } from "antd";
import { Routes, Route } from "react-router-dom";

import "../App.css";
import UserLayout from "../layout/UserLayout";

import AccountPage from "../pages/Account";

import { ROUTES } from "../constant/routes";

function App() {
  return (
    <div className="App">
      <ConfigProvider>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </div>
  );
}

export default App;
