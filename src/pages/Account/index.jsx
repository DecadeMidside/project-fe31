import { Row, Col, Form, Input, Checkbox, Button, Tabs } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions";
import { ROUTES } from "../../constant/routes";
import { logoutAction } from "../../redux/actions";

import { UserProfile, UpdatePassword } from "./component";

import * as S from "./styles";
function AccountPage() {
  const [loginForm] = Form.useForm();
  const navigate = useNavigate();
  const { loginData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (loginData.error) {
      loginForm.setFields([
        {
          name: "email",
          errors: [" "],
        },
        {
          name: "password",
          errors: [loginData.error],
        },
      ]);
    }
  }, [loginData.error]);

  const handleLogin = (values) => {
    dispatch(
      loginAction({
        data: {
          email: values.email,
          password: values.password,
        },
        callback: (role) =>
          navigate(
            role === "admin" ? ROUTES.ADMIN.DASHBOARD : ROUTES.USER.HOME
          ),
      })
    );
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      {userInfo.data.id ? (
        <S.styleProfile>
          <S.StyleTitle>MY ACCOUNT</S.StyleTitle>
          <Row>
            <S.ProfileWrapper>
              <Tabs
                tabPosition="left"
                items={[
                  {
                    label: "Thông tin cá nhân",
                    key: 1,
                    children: <UserProfile />,
                  },
                  {
                    label: "Lịch sử mua hàng",
                    key: 2,
                    // children: <OrderHistories />,
                  },
                  {
                    label: "Đổi mật khẩu",
                    key: 3,
                    children: <UpdatePassword />,
                  },
                  {
                    label: "Đăng xuất",
                    key: 4,
                    children: (
                      <div>
                        {" "}
                        {userInfo.data.id ? (
                          <>
                            <S.StyleTitleChildren>
                              USER NAME
                            </S.StyleTitleChildren>
                            <h3>{userInfo.data.fullName}</h3>
                          </>
                        ) : (
                          []
                        )}
                        <S.StyleButtonCreate
                          onClick={() => dispatch(logoutAction())}
                          style={{
                            fontSize: "16px",
                          }}
                        >
                          {" "}
                          Log Out
                        </S.StyleButtonCreate>
                      </div>
                    ),
                  },
                ]}
              />
            </S.ProfileWrapper>
          </Row>
        </S.styleProfile>
      ) : (
        <div>
          <S.StyleSlider>
            <Col span={12}>
              <S.StyleTitle>MY ACCOUNT</S.StyleTitle>
            </Col>
            <Col span={12}>
              <S.StyleText>
                Create an account on Breitling.com to activate special benefits
                and to get easy access to manage your personal information and
                e-Boutique orders.
              </S.StyleText>
            </Col>
          </S.StyleSlider>
          <div>
            <S.StyleTitle>MY ACCOUNT</S.StyleTitle>
          </div>
          <Row gutter={[16, 16]}>
            <S.StyleCustomColLogin
              span={12}
              style={{ backgroundColor: "#ffc62d" }}
            >
              <S.StyleBoxContent>
                <h1>I ALREADY HAVE AN ACCOUNT</h1>
                <S.StyleCustomFormLogin
                  form={loginForm}
                  name="loginForm"
                  className="loginForm"
                  onFinish={(values) => handleLogin(values)}
                  initialValues={{
                    remember: true,
                  }}
                >
                  <Form.Item
                    name="email"
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
      )}
    </div>
  );
}

export default AccountPage;
