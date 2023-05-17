import { Button, Col, Row, Badge, Menu, Drawer, Space } from "antd";
import { Link, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MenuOutlined, BellFilled, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ROUTES } from "../../../../constant/routes";
import {
  FaSearch,
  FaPhoneAlt,
  FaHeart,
  FaUser,
  FaCartPlus,
} from "react-icons/fa";
import Logo from "../../../../images/breitling.svg";
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
            <S.StyledImg src={Logo}></S.StyledImg>
          </S.CustomColLogo>
          <Col xs={0} md={0} lg={12} justify="center">
            <S.navBar>{menu}</S.navBar>
          </Col>
          <S.CustomColMenu>
            <Space>
              <Badge count={1} dot>
                <MailOutlined
                  style={{ fontSize: 24 }}
                  onClick={() => {
                    // setCommentsOpen(true);
                  }}
                />
              </Badge>
              <Badge count={2}>
                <BellFilled
                  style={{ fontSize: 24 }}
                  onClick={() => {
                    // setNotificationsOpen(true);
                  }}
                />
              </Badge>
            </Space>
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
