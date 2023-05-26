import {
  Checkbox,
  Form,
  Select,
  Upload,
  DatePicker,
  Table,
  Col,
  Row,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getOrderList, getFavoriteListAction } from "../../../redux/actions";
import { useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";
import moment from "moment";

import * as S from "./styles";
const { Option } = Select;

export const UserProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log("🚀 ~ file: index.jsx:10 ~ UserProfile ~ userInfo:", userInfo);

  return (
    <>
      <S.StyleCustomRow>
        <S.StyleTitle>MY PROFILE</S.StyleTitle>
      </S.StyleCustomRow>
      <S.StyleCustomRowForm>
        <S.styleFormContent>
          <Form
            // form={registerForm}
            layout="vertical"
            name="register"
            // onFinish={(values) => handleRegister(values)}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            scrollToFirstError
          >
            <Form.Item valuePropName="fileList">
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item
              name="fullName"
              label="Full Name"
              initialValue={userInfo.data.fullName}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <S.StyleCustomInput />
            </Form.Item>
            <Form.Item
              name="date-time-picker"
              label="Birthday"
              value="bottomLeft"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please input your birthday!",
                },
              ]}
            >
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                style={{ width: "500px" }}
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              initialValue={userInfo.data.phoneNumber}
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <S.StyleCustomInput />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please select gender!",
                },
              ]}
            >
              <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <S.StyleButtonCreate type="primary" htmlType="submit">
                UPDATE
              </S.StyleButtonCreate>
            </Form.Item>
          </Form>
        </S.styleFormContent>
      </S.StyleCustomRowForm>
    </>
  );
};
function OrderHistories() {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  console.log(
    "🚀 ~ file: index.jsx:121 ~ OrderHistories ~ cartList:",
    cartList
  );

  const { userInfo } = useSelector((state) => state.auth);
  const { orderList } = useSelector((state) => state.order);
  console.log(
    "🚀 ~ file: index.jsx:130 ~ OrderHistories ~ orderList:",
    orderList
  );

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getOrderList({ userId: userInfo.data.id }));
      dispatch(getFavoriteListAction({ userId: userInfo.data.id }));
    }
  }, [userInfo.data.id]);

  const tableColumns = [
    {
      title: "Ordered Codes",
      dataIndex: "createdAt",
      align: "center",
      key: "id",
    },
    {
      title: "Quantity",
      align: "center",
      dataIndex: "orderDetails",
      key: "orderDetails",
      render: (orderDetails) => `${orderDetails.length} products`,
    },
    {
      title: "Total",
      align: "center",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (cartTotalPrice) =>
        `USD ${parseInt(cartTotalPrice).toLocaleString()}`,
    },
    {
      title: "Order Date",
      align: "center",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => moment(createdAt).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Address",
      align: "center",
      dataIndex: "address",
      key: "address",
      render: (_, item) =>
        `${item.address}, ${item.wardName}, ${item.districtName}, ${item.cityName}`,
    },
  ];

  return (
    <S.styledHistoriesWrapper>
      <S.styledTable>
        <h1
          style={{
            color: "#ffc26d",
            margin: "20px 0",
          }}
        >
          {" "}
          Your Ordered{" "}
        </h1>
        <Table
          columns={tableColumns}
          dataSource={orderList.data}
          rowKey="id"
          pagination={false}
          expandable={{
            expandedRowRender: (record) => (
              <Row>
                <Col span={24}>
                  {record.orderDetails.map((item) => (
                    <Row
                      key={item.id}
                      gutter={[16, 16]}
                      style={{
                        textAlign: "center",
                        fontSize: "20px",
                        borderBottom: "1px solid green",
                        alignItems: "center",
                        fontWeight: 600,
                      }}
                    >
                      <Col span={6}>{item.name}</Col>
                      <Col span={6}>
                        <img
                          src={item.image}
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        />
                      </Col>
                      <Col span={6}>
                        {" "}
                        {`  USD ${parseInt(item.price).toLocaleString()}`}
                      </Col>
                      <Col span={6}>
                        <SlLocationPin />
                        {record.address}, {record.wardName},{" "}
                        {record.districtName},{record.cityName}`
                      </Col>
                    </Row>
                  ))}
                </Col>
              </Row>
            ),
          }}
        />
      </S.styledTable>
    </S.styledHistoriesWrapper>
  );
}

export default OrderHistories;
