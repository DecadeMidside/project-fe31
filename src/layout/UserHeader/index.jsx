import { Button, Col, Row, Badge, Menu, Drawer } from "antd";
import { Link, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
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

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menu = (
    <S.customMenu mode="horizontal">
      <Menu.Item key="watches">
        <Link to={ROUTES.USER.PRODUCT_LIST}>WATCHES</Link>
      </Menu.Item>
      <Menu.Item key="straps">STRAPS</Menu.Item>
      <Menu.Item key="stores">STORES</Menu.Item>
      <Menu.Item key="service">SERVICE</Menu.Item>
      <Menu.Item key="sustainability">SUSTAINABILITY</Menu.Item>
      <Menu.Item key="about">
        {" "}
        <Link to={ROUTES.USER.ABOUT}>ABOUT</Link>
      </Menu.Item>
    </S.customMenu>
  );

  return (
    <>
      <S.TopHeader>
        <Row justify="space-between" align="center">
          <S.CustomColLogo xs={8} md={4} lg={4}>
            <S.StyledImg
              src={Logo}
              onClick={() => navigate(ROUTES.USER.HOME)}
            ></S.StyledImg>
          </S.CustomColLogo>
          <Col xs={0} md={0} lg={12} justify="center">
            <S.navBar>{menu}</S.navBar>
          </Col>
          <S.CustomColMenu>
            <S.StyledListIcon xs={16} md={12} lg={8}>
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
                    <Link to={ROUTES.USER.CART}>
                      <FaCartPlus
                        style={{
                          color: "black",
                        }}
                        size={20}
                      />
                    </Link>
                  </Badge>
                </Link>
              </S.StyledIcon>
              <Col xs={4} md={4} lg={0}>
                <S.StyledIcon>
                  <Button
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={() => setVisible(true)}
                  />
                </S.StyledIcon>
              </Col>
            </S.StyledListIcon>
          </S.CustomColMenu>
        </Row>
      </S.TopHeader>
      <Drawer
        title={
          <Link to={ROUTES.HOME}>
            <S.StyledImg src={Logo} />
          </Link>
        }
        placement="left"
        style={{ marginTop: "86px" }}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <S.customMenuHide theme="light">
          <Menu.Item key="watches" onClick={() => setVisible(false)}>
            <Link to={ROUTES.USER.PRODUCT_LIST}>WATCHES</Link>
          </Menu.Item>
          <Menu.Item key="straps" onClick={() => setVisible(false)}>
            STRAPS
          </Menu.Item>
          <Menu.Item key="stores" onClick={() => setVisible(false)}>
            STORES
          </Menu.Item>
          <Menu.Item key="service" onClick={() => setVisible(false)}>
            SERVICE
          </Menu.Item>
          <Menu.Item key="sustainability" onClick={() => setVisible(false)}>
            SUSTAINABILITY
          </Menu.Item>
          <Menu.Item key="about" onClick={() => setVisible(false)}>
            ABOUT
          </Menu.Item>
        </S.customMenuHide>
      </Drawer>
    </>
  );
}
export default Header;
