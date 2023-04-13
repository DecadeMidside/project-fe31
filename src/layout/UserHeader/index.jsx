import { Col, Row } from "antd";
import { Link } from "react-router-dom";

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
  return (
    <>
      <S.TopHeader>
        <Row>
          <S.CustomColLogo span={4}>
            <S.StyledImg src={Logo}></S.StyledImg>
          </S.CustomColLogo>
          <Col span={12}>
            <S.navBar>
              <li>WATCHES</li>
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
                <Link to={ROUTES.ACCOUNT}>
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
      </S.TopHeader>
      <S.HeaderBar>
        {/* <S.RowCenter>
          <Col span={8}></Col>
          <Col span={8}></Col>
          <Col span={8}>col-8</Col>
        </S.RowCenter> */}
      </S.HeaderBar>
    </>
  );
}
export default Header;
