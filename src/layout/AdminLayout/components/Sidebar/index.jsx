import { useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

import { ROUTES } from "../../../../constant/routes";

import * as S from "./styles";

const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    path: ROUTES.ADMIN.DASHBOARD,
    icon: <AppstoreOutlined />,
  },
  {
    label: "Product Management",
    path: ROUTES.ADMIN.PRODUCT_MANAGEMENT,
    icon: <ShopOutlined />,
  },
  {
    label: "User Management",
    path: ROUTES.ADMIN.USER_MANAGEMENT,
    icon: <UserOutlined />,
  },
  {
    label: "Order Management",
    path: ROUTES.ADMIN.ODER_MANAGEMENT,
    icon: <ShoppingCartOutlined />,
  },
];

function AdminSidebar(props) {
  const { isShowSidebar } = props;

  const { pathname } = useLocation();

  const renderSidebarItems = () => {
    return SIDEBAR_ITEMS.map((item, index) => {
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
