import { Button, Col, Row, Badge } from "antd";
import { Link, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { ROUTES } from "../../constant/routes";
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
  const { cartList } = useSelector((state) => state.cart);
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
              <li>
                <Link to={ROUTES.USER.PRODUCT_LIST}>WATCHES</Link>
              </li>
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
                <S.StyledIconPhone>
                  {" "}
                  <FaPhoneAlt />
                </S.StyledIconPhone>
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
                <Link to={ROUTES.USER.CART}>
                  <Badge
                    count={cartList.length}
                    size="small"
                    style={{
                      backgroundColor: "rgba(101, 100, 100, 0.5)",
                    }}
                  >
                    <FaCartPlus
                      style={{
                        color: "black",
                      }}
                      size={20}
                    />
                  </Badge>
                </Link>
              </S.StyledIcon>
            </S.StyledListIcon>
          </S.CustomCol>
        </Row>
      </S.TopHeader>
    </>
  );
}
export default Header;
