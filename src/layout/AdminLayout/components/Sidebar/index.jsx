import { useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  UnorderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../../redux/actions";
import { ROUTES } from "../../../../constant/routes";

import * as S from "./styles";

const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    path: ROUTES.ADMIN.DASHBOARD,
    icon: <AppstoreOutlined />,
  },
  {
    label: "Products Management",
    path: ROUTES.ADMIN.PRODUCT_MANAGEMENT,
    icon: <ShopOutlined />,
  },
  {
    label: "Accounts Management",
    path: ROUTES.ADMIN.USER_MANAGEMENT,
    icon: <UserOutlined />,
  },
  {
    label: "Orders Management",
    path: ROUTES.ADMIN.ODER_MANAGEMENT,
    icon: <ShoppingCartOutlined />,
  },
  {
    label: "Customers Management",
    path: ROUTES.ADMIN.CUSTOMERS_MANAGEMENT,
    icon: <CustomerServiceOutlined />,
  },
  {
    label: "Categories Management",
    path: ROUTES.ADMIN.CATEGORIES_MANAGEMENT,
    icon: <UnorderedListOutlined />,
  },
  {
    label: "Log out",
    path: ROUTES.USER.ACCOUNT,
    icon: <LogoutOutlined />,
  },
];

function AdminSidebar(props) {
  const { isShowSidebar } = props;
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const renderSidebarItems = () => {
    return SIDEBAR_ITEMS.map((item, index) => {
      if (item.label === "Log out") {
        return (
          <S.SidebarItem key={index} onClick={() => dispatch(logoutAction())}>
            <Space>
              {item.icon}
              {item.label}
            </Space>
          </S.SidebarItem>
        );
      }

      return (
        <S.SidebarItem
          key={index}
          to={item.path}
          active={pathname === item.path}
        >
          <Space>
            {item.icon}
            {item.label}
          </Space>
        </S.SidebarItem>
      );
    });
  };

  return (
    <S.SidebarWrapper isShow={isShowSidebar}>
      {renderSidebarItems()}
    </S.SidebarWrapper>
  );
}

export default AdminSidebar;
