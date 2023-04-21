import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAction } from "../../redux/actions/auth.action";
import { useEffect } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import * as S from "./styles";
import { useState } from "react";
const { Option } = Select;

function RegisterPage() {
  const [registerForm] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const { registerData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (registerData.error) {
      registerForm.setFields([
        {
          name: "email",
          errors: [registerData.error],
        },
      ]);
    }
  }, [registerData.error]);

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  const handleRegister = (values) => {
    dispatch(
      registerAction({
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
      })
    );
  };
  return (
    <>
      <S.StyleCustomRow>
        <S.StyleTitle>CREATE MY ACCOUNT</S.StyleTitle>
      </S.StyleCustomRow>
      <S.StyleCustomRowForm>
        <S.styleFormContent>
          <Form
            form={registerForm}
            layout="vertical"
            name="register"
            onFinish={(values) => handleRegister(values)}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  whitespace: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <S.StyleCustomInput />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
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
              label="Confirm Password"
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

            {/* <Form.Item
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
          </Form.Item> */}

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <S.StyleButtonCreate type="primary" htmlType="submit">
                CREATE MY ACCOUNT
              </S.StyleButtonCreate>
            </Form.Item>
          </Form>
        </S.styleFormContent>
      </S.StyleCustomRowForm>
    </>
  );
}
export default RegisterPage;
