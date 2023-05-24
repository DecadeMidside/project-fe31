import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import {
  Form,
  Button,
  Input,
  Select,
  Radio,
  Row,
  Col,
  Card,
  Space,
  Table,
  Avatar,
} from "antd";
import {
  getCityListAction,
  getDistrictListAction,
  getWardListAction,
  orderProductAction,
  getUserInfoAction,
} from "../../redux/actions";

import { ROUTES } from "../../constant/routes";

// import * as S from "./styles";

function CheckoutPage() {
  const [checkoutForm] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCityListAction());
  }, []);
  const { cityList, districtList, wardList } = useSelector(
    (state) => state.location
  );
  const { cartList } = useSelector((state) => state.cart);
  console.log("🚀 ~ file: index.jsx:40 ~ CheckoutPage ~ cartList:", cartList);
  const { userInfo } = useSelector((state) => state.auth);
  console.log("🚀 ~ file: index.jsx:41 ~ CheckoutPage ~ userInfo:", userInfo);
  const initialValues = {};
  const data = JSON.parse(localStorage.getItem("cartList"));
  const cartTotalPrice = cartList.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );
  const tableColumn = [
    {
      title: "Product Images",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (_, item) => {
        return (
          <Avatar
            size="large"
            src={item.image}
            style={{
              height: "100px",
            }}
          ></Avatar>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "Price",
      render: (price) => `USD ${parseInt(price).toLocaleString()} `,
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (_, item) => `USD ${parseInt(item.price).toLocaleString()} `,
    },
  ];

  const handleSubmitCheckoutForm = (values) => {
    const totalPrice = cartList.reduce(
      (total, item) => total + parseInt(item.price),
      0
    );

    dispatch(
      orderProductAction({
        data: {
          ...values,
          cityName: cityList.data.find((item) => item.code === values.cityCode)
            ?.name,
          districtName: districtList.data.find(
            (item) => item.code === values.districtCode
          )?.name,
          wardName: wardList.data.find((item) => item.code === values.wardCode)
            ?.name,
          userId: userInfo.data.id,
          totalPrice: totalPrice,
          status: "pending",
        },
        products: cartList,
        callback: () => {
          navigate(ROUTES.USER.SUCCESSCHECKOUT, { state: values });
        },
      })
    );
  };

  const renderCityOptions = useMemo(() => {
    return cityList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [cityList.data]);

  const renderDistrictOptions = useMemo(() => {
    return districtList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [districtList.data]);

  const renderWardListOptions = useMemo(() => {
    return wardList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [wardList.data]);

  if (!cartList.length) return <Navigate to={ROUTES.USER.CART} />;
  return (
    <div>
      <h2 style={{ marginBottom: 24, color: "black", alignItems: "center" }}>
        Payment
      </h2>
      <Card size="small" title="Shopping Bag" style={{ marginBottom: 24 }}>
        <Table
          size="small"
          columns={tableColumn}
          dataSource={data}
          rowKey="id"
          pagination={false}
        />
        Totally: USD {cartTotalPrice.toLocaleString()}
      </Card>
      <Form
        name="checkoutForm"
        form={checkoutForm}
        layout="vertical"
        initialValues={initialValues}
        onFinish={(values) => handleSubmitCheckoutForm(values)}
      >
        <Card
          size="small"
          title="Shipment Information"
          style={{ marginBottom: 24 }}
        >
          <Row gutter={[16, 16]} key={userInfo.data.id}>
            <Col span={24}>
              <Form.Item
                label="Full Name"
                name="fullName"
                initialValue={userInfo.data.fullName}
                rules={[
                  { required: true, message: "Please input your fullname!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                initialValue={userInfo.data.email}
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="City/Province"
                name="cityCode"
                rules={[
                  { required: true, message: "Choose your city/province!" },
                ]}
              >
                <Select
                  onChange={(value) => {
                    dispatch(getDistrictListAction({ cityCode: value }));
                    checkoutForm.setFieldsValue({
                      districtCode: undefined,
                      wardCode: undefined,
                    });
                  }}
                >
                  {renderCityOptions}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="District"
                name="districtCode"
                rules={[{ required: true, message: "Choose your district!" }]}
              >
                <Select
                  onChange={(value) => {
                    dispatch(getWardListAction({ districtCode: value }));
                    checkoutForm.setFieldsValue({
                      wardCode: undefined,
                    });
                  }}
                  disabled={!checkoutForm.getFieldValue("cityCode")}
                >
                  {renderDistrictOptions}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Ward"
                name="wardCode"
                rules={[{ required: true, message: "Choose your district!" }]}
              >
                <Select disabled={!checkoutForm.getFieldValue("districtCode")}>
                  {renderWardListOptions}
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card size="small" title="Payment" style={{ marginBottom: 24 }}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                label="Payment Method"
                name="paymentMethod"
                rules={[
                  {
                    required: true,
                    message: "Which payment method do you like ?",
                  },
                ]}
              >
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value="cod">COD</Radio>
                    <Radio value="atm">ATM</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Row justify="space-between">
          <Button onClick={() => navigate(ROUTES.USER.CART_LIST)}>Back</Button>

          <Button
            type="primary"
            htmlType="submit"
            onClick={() => checkoutForm.submit()}
          >
            Pay
          </Button>
        </Row>
      </Form>
    </div>
  );
}

export default CheckoutPage;
