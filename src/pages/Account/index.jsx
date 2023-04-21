import { Row, Col, Form, Input, Checkbox, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constant/routes";
import * as S from "./styles";
function AccountPage() {
  return (
    <div>
      <S.StyleSlider>
        <Col span={12}>
          <S.StyleTitle>MY ACCOUNT</S.StyleTitle>
        </Col>
        <Col span={12}>
          <S.StyleText>
            Create an account on Breitling.com to activate special benefits and
            to get easy access to manage your personal information and
            e-Boutique orders.
          </S.StyleText>
        </Col>
      </S.StyleSlider>
      <div>
        <S.StyleTitle>MY ACCOUNT</S.StyleTitle>
      </div>
      <Row gutter={[16, 16]}>
        <S.StyleCustomColLogin span={12} style={{ backgroundColor: "#ffc62d" }}>
          <S.StyleBoxContent>
            <h1>I ALREADY HAVE AN ACCOUNT</h1>
            <S.StyleCustomFormLogin
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <S.StyleCustomInput
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <S.StyleCustomInput
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a href="">Forgot password</a>
              </Form.Item>

              <Form.Item>
                <S.StyleCustomButtonLogin
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  LOG IN
                </S.StyleCustomButtonLogin>
              </Form.Item>
            </S.StyleCustomFormLogin>
          </S.StyleBoxContent>
        </S.StyleCustomColLogin>
        <S.StyleCustomColCreateAccount span={12}>
          <S.StyleBoxContent>
            {" "}
            <h1>I DON'T HAVE AN ACCOUNT</h1>
            <Link to={ROUTES.USER.REGISTER}>
              <S.StyleButtonCreate>CREATE MY ACCOUNT</S.StyleButtonCreate>
            </Link>
          </S.StyleBoxContent>
        </S.StyleCustomColCreateAccount>
      </Row>
    </div>
  );
}
export default AccountPage;
