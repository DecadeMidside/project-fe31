import { useLocation } from "react-router-dom";

import { ROUTES } from "../../../../constant/routes";

import * as S from "./styles";

const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    path: ROUTES.ADMIN.DASHBOARD,
  },
  {
    label: "Product Management",
    path: ROUTES.ADMIN.PRODUCT_MANAGEMENT,
  },
  {
    label: "User Management",
    path: ROUTES.ADMIN.USER_MANAGEMENT,
  },
];

function AdminSidebar() {
  //   const { isShowSidebar } = props;

  const { pathname } = useLocation();

  const renderSidebarItems = () => {
    return SIDEBAR_ITEMS.map((item, index) => {
      return (
        <S.SidebarItem
          key={index}
          to={item.path}
          active={pathname === item.path}
        >
          {item.label}
        </S.SidebarItem>
      );
    });
  };

  return <S.SidebarWrapper>{renderSidebarItems()}</S.SidebarWrapper>;
}

export default AdminSidebar;
