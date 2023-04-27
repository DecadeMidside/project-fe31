import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { ROUTES } from "../../constant/routes";
import { logoutAction } from "../../redux/actions";
import {
  FaSearch,
  FaPhoneAlt,
  FaHeart,
  FaUser,
  FaCartPlus,
} from "react-icons/fa";
import Logo from "../../images/breitling.svg";
import * as S from "./styles";

function Header() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <S.TopHeader>
        <Row>
          <S.CustomColLogo span={4}>
            <S.StyledImg src={Logo}></S.StyledImg>
          </S.CustomColLogo>

          <Col span={12}>
            <S.navBar>
              <Link to={ROUTES.USER.PRODUCT_LIST}>
                <li>WATCHES</li>
              </Link>
              <li>STRAPS</li>
              <li>STORES</li>
              <li>SERVICE</li>
              <li>SUSTAINABILITY</li>
              <li>ABOUT</li>
            </S.navBar>
          </Col>
          <S.CustomCol span={8}>
            <S.StyledListIcon>
              <S.StyledIcon>
                {" "}
                <FaSearch />
              </S.StyledIcon>
              <S.StyledIcon>
                {" "}
                <FaPhoneAlt />
              </S.StyledIcon>
              <S.StyledIcon>
                {" "}
                <FaHeart />
              </S.StyledIcon>
              <S.StyledIcon>
                <Link to={ROUTES.USER.ACCOUNT}>
                  <FaUser />
                </Link>
              </S.StyledIcon>
              <S.StyledIcon>
                {" "}
                <FaCartPlus />
              </S.StyledIcon>
            </S.StyledListIcon>
          </S.CustomCol>
        </Row>
        <div
        // style={{
        //   backgroundColor: "white",
        // }}
        >
          {" "}
          {userInfo.data.id ? <h3>{userInfo.data.fullName}</h3> : []}
          <span
            onClick={() => dispatch(logoutAction())}
            style={{
              fontSize: "16px",
            }}
          >
            {" "}
            Log Out
          </span>
        </div>
      </S.TopHeader>
    </>
  );
}
export default Header;
