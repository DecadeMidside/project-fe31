import { Outlet } from "react-router-dom";

import UserHeader from "../UserHeader";
import Footer from "../Footer";
import * as S from "./styles";

function UserLayout() {
  return (
    <>
      <UserHeader />
      <S.MainWrapper>
        <Outlet />
      </S.MainWrapper>
      <Footer />
    </>
  );
}

export default UserLayout;
