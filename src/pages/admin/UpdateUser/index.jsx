import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Select, InputNumber, Space, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";

import { ROUTES } from "../../../constant/routes";
import {
  getUserListAction,
  getUserInfoAdminAction,
  updateUserAction,
} from "../../../redux/actions";

import * as S from "./styles";

function UpdateUser() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateForm] = Form.useForm();
  const { userList } = useSelector((state) => state.user);
  console.log("🚀 ~ file: index.jsx:29 ~ UpdateUser ~ userList:", userList);
  const { userInfo } = useSelector((state) => state.user);
  console.log("🚀 ~ file: index.jsx:30 ~ UpdateUser ~ userInfo:", userInfo);

  const initialValues = {
    fullName: userInfo.data?.fullName,
    email: userInfo.data?.email,
    role: userInfo.data?.role,
  };

  useEffect(() => {
    dispatch(getUserInfoAdminAction({ id: id }));
  }, [id]);

  useEffect(() => {
    if (userInfo.data.id) {
      updateForm.resetFields();
    }
  }, [userInfo.data, updateForm]);

  const handleUpdateUser = async (values) => {
    const { ...userValues } = values;

    dispatch(
      updateUserAction({
        id: id,
        data: userValues,

        callback: () => navigate(ROUTES.ADMIN.USER_MANAGEMENT),
      })
    );
  };

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Update User</h3>
        <S.styleCreate
          type="primary"
          // loading={updateUserData.load}
          onClick={() => updateForm.submit()}
        >
          Update
        </S.styleCreate>
      </S.TopWrapper>
      <Form
        form={updateForm}
        layout="vertical"
        initialValues={initialValues}
        onFinish={(values) => handleUpdateUser(values)}
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Select>
            <Select.Option>admin</Select.Option>
            <Select.Option>user</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </S.Wrapper>
  );
}

export default UpdateUser;
