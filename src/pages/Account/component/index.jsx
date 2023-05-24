import { Checkbox, Form, Select, Upload, DatePicker, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getOrderList } from "../../../redux/actions";
import { useEffect } from "react";
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
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <S.StyleCustomInput values={userInfo.data.fullName} />
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

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getOrderList({ userId: userInfo.data.id }));
    }
  }, [userInfo.data.id]);

  const tableColumns = [
    {
      title: "Ordered Codes",
      dataIndex: "createdAt",
      key: "id",
    },
    {
      title: "Quantity",
      dataIndex: "orderDetails",
      key: "orderDetails",
      render: (orderDetails) => `${orderDetails.length} products`,
    },
    {
      title: "Total",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (cartTotalPrice) =>
        `USD ${parseInt(cartTotalPrice).toLocaleString()}`,
    },
    {
      title: "Order Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => moment(createdAt).format("DD/MM/YYYY HH:mm"),
    },
  ];

  return (
    <Table
      columns={tableColumns}
      dataSource={orderList.data}
      rowKey="id"
      pagination={false}
      expandable={{
        expandedRowRender: (record) => (
          <ul>
            {record.orderDetails.map((item) => (
              <li key={item.id}>
                {item.name}
                {` - USD ${parseInt(item.price).toLocaleString()}`}
              </li>
            ))}
          </ul>
        ),
      }}
    />
  );
}
export const UpdatePassword = () => {
  return (
    <>
      <S.StyleCustomRow>
        <S.StyleTitle>UPDATE MY PASSWORD</S.StyleTitle>
      </S.StyleCustomRow>
      <S.StyleCustomRowForm>
        <S.styleFormContent>
          <Form layout="vertical" name="register" scrollToFirstError>
            <Form.Item
              name="currentPassword"
              label="Current Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <S.StyleCustomInputPass />
            </Form.Item>
            <Form.Item
              name="newPassword"
              label="New Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <S.StyleCustomInputPass />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm New Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <S.StyleCustomInputPass />
            </Form.Item>

            <Form.Item>
              <S.StyleButtonCreate type="primary" htmlType="submit">
                PASSWORD UPDATED
              </S.StyleButtonCreate>
            </Form.Item>
          </Form>
        </S.styleFormContent>
      </S.StyleCustomRowForm>
    </>
  );
};
export default OrderHistories;
