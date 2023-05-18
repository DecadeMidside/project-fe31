import {
  Button,
  Col,
  Row,
  Badge,
  Menu,
  Drawer,
  Space,
  List,
  Typography,
  Card,
  Rate,
} from "antd";
import { Link, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MenuOutlined, BellFilled, MailOutlined } from "@ant-design/icons";
import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ROUTES } from "../../../../constant/routes";
import Logo from "../../../../images/breitling.svg";
import {
  getReviewListAction,
  sendReviewAction,
} from "../../../../redux/actions";
import * as S from "./styles";

function Header(props) {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const { reviewList } = useSelector((state) => state.review);
  console.log("🚀 ~ file: index.jsx:31 ~ Header ~ reviewList:", reviewList);
  const dispatch = useDispatch();

  const { isShowSidebar, setIsShowSidebar } = props;
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

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
  useEffect(() => {
    dispatch(getReviewListAction());
  }, []);
  const renderReviewList = useMemo(() => {
    return reviewList.data.map((item) => {
      return (
        <Card size="small" key={item.id}>
          {/* <Space>
            <h3>{item.user.fullName}</h3>
          </Space>
          <Rate value={item.rate} disabled style={{ fontSize: 12 }} /> */}
          <p>{item.comment}</p>
        </Card>
      );
    });
  }, [reviewList.data]);

  return (
    <>
      <S.TopHeader>
        <Row justify="space-between" align="center">
          <S.CustomColLogo xs={8} md={4} lg={4}>
            <S.StyledImg src={Logo}></S.StyledImg>

            <S.StyledBtnProduct
              type="primary"
              width="100px"
              onClick={() => setIsShowSidebar(!isShowSidebar)}
            >
              <MenuOutlined />
              Menu
            </S.StyledBtnProduct>
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
                    setCommentsOpen(true);
                  }}
                />
              </Badge>
              <Badge count={2}>
                <BellFilled
                  style={{ fontSize: 24 }}
                  onClick={() => {
                    setNotificationsOpen(true);
                  }}
                />
              </Badge>
            </Space>
            <Drawer
              title="Comments"
              open={commentsOpen}
              onClose={() => {
                setCommentsOpen(false);
              }}
              maskClosable
            >
              <div>{renderReviewList}</div>
            </Drawer>
            <Drawer
              title="Notifications"
              open={notificationsOpen}
              onClose={() => {
                setNotificationsOpen(false);
              }}
              maskClosable
            >
              <List
                // dataSource={orders}
                renderItem={(item) => {
                  return (
                    <List.Item>
                      <Typography.Text strong>{item.title}</Typography.Text> has
                      been ordered!
                    </List.Item>
                  );
                }}
              ></List>
            </Drawer>
          </S.CustomColMenu>
        </Row>
      </S.TopHeader>
    </>
  );
}
export default Header;
