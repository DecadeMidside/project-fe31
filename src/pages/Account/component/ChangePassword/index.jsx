import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "antd";

import { changePasswordAction } from "../../../../redux/actions";

function ChangePassword() {
  const [changePasswordForm] = Form.useForm();

  const { userInfo, changePasswordData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (changePasswordData.error) {
      changePasswordForm.setFields([
        {
          name: "password",
          errors: ["Password is incorrect!"],
        },
      ]);
    }
  }, [changePasswordData.error]);

  const handleChangePassword = (values) => {
    dispatch(
      changePasswordAction({
        id: userInfo.data.id,
        data: {
          email: userInfo.data.email,
          password: values.password,
          newPassword: values.newPassword,
        },
        callback: () => changePasswordForm.resetFields(),
      })
    );
  };

  return (
    <Form
      form={changePasswordForm}
      name="changePasswordForm"
      layout="vertical"
      onFinish={(values) => handleChangePassword(values)}
      autoComplete="off"
    >
      <Form.Item
        label="Current Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="New Password"
        name="newPassword"
        rules={[
          {
            required: true,
            message: "Please input your new password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirm New Password"
        name="confirmNewPassword"
        rules={[
          {
            required: true,
            message: "Please input your confirm new password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Button
        // type="primary"
        htmlType="submit"
        block
        loading={changePasswordData.load}
        style={{
          color: "black",
        }}
      >
        Changed Password
      </Button>
    </Form>
  );
}

export default ChangePassword;
