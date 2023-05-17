import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  Result,
} from "antd";
import {
  getCityListAction,
  getDistrictListAction,
  getWardListAction,
  orderProductAction,
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
  const { userInfo } = useSelector((state) => state.auth);

  const initialValues = {};
  const data = JSON.parse(localStorage.getItem("cartList"));
  console.log("🚀 ~ file: index.jsx:42 ~ CheckoutPage ~ data:", data);
  const tableColumn = [
    {
      title: "Hình ảnh",
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
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "Price",
      render: (price) => `${price.toLocaleString()} VND`,
    },
    {
      title: "Thành tiền",
      dataIndex: "total",
      key: "total",
      render: (_, item) => `${item.price.toLocaleString()} VND`,
    },
  ];

  const handleSubmitCheckoutForm = (values) => {
    console.log(
      "🚀 ~ file: index.jsx:69 ~ handleSubmitCheckoutForm ~ values:",
      values
    );

    const totalPrice = cartList.reduce((total, item) => total + item.price, 0);
    dispatch(
      orderProductAction({
        data: {
          ...values,
          userId: userInfo.data.id,
          totalPrice: totalPrice,
          status: "pending",
        },
        products: cartList,
        callback: () => navigate(ROUTES.USER.SUCCESS),
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

  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Thủ tục thanh toán</h2>
      <Card size="small" title="Giỏ hàng" style={{ marginBottom: 24 }}>
        <Table
          size="small"
          columns={tableColumn}
          dataSource={data}
          rowKey="id"
          pagination={false}
        />
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
          title="Thông tin giao hàng"
          style={{ marginBottom: 24 }}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                label="Họ và tên"
                name="fullName"
                rules={[{ required: true, message: "Required!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Required!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Số điện thoại"
                name="phoneNumber"
                rules={[{ required: true, message: "Required!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Tỉnh/Thành"
                name="cityCode"
                rules={[{ required: true, message: "Required!" }]}
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
                label="Quận/Huyện"
                name="districtCode"
                rules={[{ required: true, message: "Required!" }]}
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
                label="Phường/Xã"
                name="wardCode"
                rules={[{ required: true, message: "Required!" }]}
              >
                <Select disabled={!checkoutForm.getFieldValue("districtCode")}>
                  {renderWardListOptions}
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Địa chỉ"
                name="address"
                rules={[{ required: true, message: "Required!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card
          size="small"
          title="Thông tin thanh toán"
          style={{ marginBottom: 24 }}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                label="Phương thức thanh toán"
                name="paymentMethod"
                rules={[{ required: true, message: "Required!" }]}
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
          <Button onClick={() => navigate(ROUTES.USER.CART_LIST)}>
            Trở lại
          </Button>
          <Button type="primary" htmlType="submit">
            Thanh toán
          </Button>
        </Row>
      </Form>
    </div>
  );
}

export default CheckoutPage;
